import React, {useEffect, useState} from "react";
import header from "../images/header_2.png";
import og_logo from "../images/logo-og.png";
import Dropdown from "../elements/Dropdown";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Button from "../elements/Button";
import {isMobile} from "react-device-detect";
import {addThemeResult, getThemes} from "../Api/themes";
import Modal from '../Elements/Modal';

let elementIndex = 0;
let scores = [];
let sessionID = 0;

const MeterPage = () => {
    const location = useLocation();
    const [themes, setThemes] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const getSessionID = () => {
        if (location.state != null) {
            console.log("session id defined")
            sessionID = location.state.id
        } else {
            return
        }
    }
    const changeTheme = () => {
        if (themes != null) {
            const title = themes[elementIndex].title;
            resetThemeDropdown(title);
            const description = themes[elementIndex].description;
            const note1 = themes[elementIndex].note1;
            const note2 = themes[elementIndex].note2;
            const note3 = themes[elementIndex].note3;
            document.getElementById("header_element").innerHTML = title;
            document.getElementById("header_subject").innerHTML = themes[elementIndex].header;
            document.getElementById("subject_description").innerHTML = description;
            if (note1 == "") {
                document.getElementById("bullet_list").classList.add("hidden");
            } else {
                document.getElementById("bullet_list").classList.remove("hidden");
                document.getElementById("note1").innerHTML = note1;
                document.getElementById("note2").innerHTML = note2;
                document.getElementById("note3").innerHTML = note3;
            }
        } else {
            return
        }
    }

    const updateThemes = () => {
        getThemes().then((theme) => {
            setThemes(theme);
        }).catch((error) => {
            console.log(error)
        });
    };

    const sendThemeScores = () => {
        for (let i = 0; i < scores.length; i++) {
            let nu, straks, later;
            Number.isInteger(parseInt(scores[i][1])) ? nu = scores[i][1] : nu = 0;
            Number.isInteger(parseInt(scores[i][2])) ? straks = scores[i][2] : straks = 0;
            Number.isInteger(parseInt(scores[i][3])) ? later = scores[i][3] : later = 0;
            addThemeResult({
                session_id: sessionID,
                theme_name: scores[i][0],
                number_nu: nu,
                number_straks: straks,
                number_later: later
            }).then((theme) => {
            }).catch(error => {
                console.error(error);
            });
        }
    };

    const saveThemeScores = () => {
        const themeTitle = document.getElementById("header_element").innerHTML;
        let subject_list = [];
        subject_list.push(themeTitle);
        subject_list.push(document.getElementById("Score nu").innerHTML);
        subject_list.push(document.getElementById("Score straks").innerHTML);
        subject_list.push(document.getElementById("Score later").innerHTML);
        let score_found = false;
        if (scores.length === 0) {
            scores.push(subject_list);
        } else {
            for (let i = 0; i < scores.length; i++) {
                const scoreArray = scores[i];
                if (scoreArray.includes(themeTitle)) {
                    score_found = true;
                    scores[i] = subject_list;
                    break;
                } else {
                    continue;
                }
            }
            if (!score_found) {
                scores.push(subject_list);
            }
        }
    };

    const resetThemeDropdown = (title) => {
        for (let i = 0; i < scores.length; i++) {
            const scoreArray = scores[i];
            if (scoreArray.includes(title)) {
                document.getElementById("Score nu").innerHTML = scoreArray[1];
                document.getElementById("Score straks").innerHTML = scoreArray[2];
                document.getElementById("Score later").innerHTML = scoreArray[3];
                break;
            } else {
                document.getElementById("Score nu").innerHTML =
                    'Score nu<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="-mr-1 ml-2 h-5 w-5"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>';
                document.getElementById("Score straks").innerHTML =
                    'Score straks<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="-mr-1 ml-2 h-5 w-5"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>';
                document.getElementById("Score later").innerHTML =
                    'Score later<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="-mr-1 ml-2 h-5 w-5"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>';
            }
        }
    };
    useEffect(() => {
        getSessionID();
    }, []);
    useEffect(() => {
        updateThemes()
    }, [])
    if(elementIndex===0){
        changeTheme()
    }

    if (isMobile) {
        return (
            <div>
                <InfoElement image_src={themes != null ? themes[elementIndex].image : ""}/>
                <TableMobile title={themes != null ? themes[elementIndex].title : ""}/>
                <div className="flex flex-row space-x-4 justify-center mb-4">
                    {elementIndex === 0 ? (
                        <Link to="/gegevens">
                            <Button direction="left" text="Wijzig gegevens"></Button>
                        </Link>
                    ) : (
                        <Link to="/meter">
                            <Button
                                onClick={() => {
                                    elementIndex--;
                                    saveThemeScores()
                                    changeTheme()
                                }}
                                direction="left"
                                text="Vorige thema"
                            ></Button>
                        </Link>
                    )}
                    {elementIndex === 9 ? (
                        <Link id="button_link" to="/samenvatting">
                            <Button direction="right" text="Naar samenvatting" onClick={() => {
                                saveThemeScores()
                                sendThemeScores()
                            }
                            }></Button>
                        </Link>
                    ) : (
                        <Link id="button_link" to="/meter">
                            <Button
                                onClick={() => {
                                    elementIndex++;
                                    saveThemeScores();
                                    changeTheme()
                                }}
                                direction="right"
                                text="Volgende thema"
                            ></Button>
                        </Link>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <InfoElement image_src={themes != null ? themes[elementIndex].image : ""}/>
                <TableDesktop title={themes != null ? themes[elementIndex].title : ""}/>
                <div className="flex flex-row space-x-4 justify-center mb-4">
                    {elementIndex === 0 ? (
                        <Link to="/uitleg">
                            <Button direction="left" text="Terug naar uitleg"></Button>
                        </Link>
                    ) : (
                        <Link to="/meter">
                            <Button
                                onClick={() => {
                                    elementIndex--;
                                    saveThemeScores();
                                    changeTheme();
                                }}
                                direction="left"
                                text="Vorige thema"
                            ></Button>
                        </Link>
                    )}
                    {elementIndex === 9 ? (
                            <Button direction="right" text="Bekijk samenvatting" onClick={() => {
                                setShowModal(true)
                            }
                            }></Button>
                    ) : (
                        <Link id="button_link" to="/meter">
                            <Button
                                onClick={() => {
                                    elementIndex++;
                                    saveThemeScores();
                                    changeTheme()
                                }}
                                direction="right"
                                text="Volgende thema"
                            ></Button>
                        </Link>
                    )}
                </div>
                <Modal show={showModal} description={"Weet u zeker dat u door wilt gaan naar uw rapport? U kunt hierna geen velden meer aanpassen."} onClick={()=>{
                    saveThemeScores()
                    sendThemeScores()
                }
                } sessionID={sessionID} onClose={() => {
                    setShowModal(false)
                }
                }/>
            </div>
        );
    }
};

export default MeterPage;

const InfoElement = (image_src) => {
    return (
        <div>
            <img
                src={og_logo}
                className="w-28 h-auto absolute z-40 left-0 ml-4 mt-4"
            />
            <div className="items-end justify-center flex">
                <div className="absolute mb-14 md:mt-0">
                    <h1
                        id="header_element"
                        className="text-white font-black font-avenirnext-heavy text-3xl"
                    >
                        Placeholder
                    </h1>
                </div>
                <img
                    src={header}
                    alt="header"
                    className="w-full h-80 md:h-full object-cover"
                />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 px-8 md:px-24 mt-8">
                <div className="bg-[#EFEFEF] rounded-2xl w-full h-full drop-shadow-sm">
                    <h1
                        id="header_subject"
                        className="font-avenirnext-demi font-black text-lg mt-6 ml-8"
                    >
                        Placeholder
                    </h1>
                    <p
                        id="subject_description"
                        className="text-xs font-avenirnext-regular px-8 mt-2 mb-6"
                    >
                        Lorum ipsum placeholder
                    </p>
                    <ul id="bullet_list" className="list-disc px-9">
                        <li
                            id="note1"
                            className="text-xs font-avenirnext-regular pl-2"
                        ></li>
                        <li
                            id="note2"
                            className="text-xs font-avenirnext-regular pl-2"
                        ></li>
                        <li
                            id="note3"
                            className="text-xs font-avenirnext-regular pl-2 mb-6"
                        ></li>
                    </ul>
                </div>
                <div className="bg-[#EFEFEF] rounded-2xl w-full drop-shadow-sm">
                    <div className="p-8 w-full">
                        <img
                            id="subject_image"
                            className="w-full rounded-2xl h-44 object-cover"
                            src={image_src.image_src}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
const TableMobile = (props) => {
    return (
        <div className="px-8 md:px-24 mt-4">
            <div className="bg-background rounded-2xl">
                <h1 className="font-avenirnext-demi font-black text-lg ml-6 pt-6">
                    Jouw score voor {props.title}
                </h1>
                <div className="overflow-x-auto sm:rounded-lg px-4 mt-6 pb-6">
                    <table className="w-full font-badscipt-regular text-sm text-left text-blue-100 dark:text-black">
                        <thead className="text-lg text-black border-b-2 border-gray-900 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Levensfase
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 border-l-2 border-gray-900"
                            >
                                {props.title}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-lg text-black whitespace-nowrap dark:text-black"
                            >
                                Nu
                            </th>
                            <td className="px-6 py-4 border-l-2 border-gray-900">
                                <Dropdown id="dropdown1" title={"Score nu"}/>
                            </td>
                        </tr>
                        <tr>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-lg text-black whitespace-nowrap dark:text-black"
                            >
                                Straks
                            </th>
                            <td className="px-6 py-4 border-l-2 border-gray-900">
                                <Dropdown id="dropdown2" title={"Score straks"}/>
                            </td>
                        </tr>
                        <tr>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-lg text-black whitespace-nowrap dark:text-black"
                            >
                                Later
                            </th>
                            <td className="px-6 py-4 border-l-2 border-gray-900">
                                <Dropdown id="dropdown3" title={"Score later"}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/*<img src={background} className="rounded-2xl h-60 w-full"/>*/}
        </div>
    );
};
const TableDesktop = (props) => {
    return (
        <div className="px-8 md:px-24 mt-4">
            <div className="bg-background rounded-2xl">
                {/*<img src={background} className="rounded-2xl h-60 w-full"/>*/}
                <h1 className="ml-20 pt-6 font-avenirnext-demi font-black text-lg">
                    Jouw score voor {props.title}
                </h1>
                <div className="lg:pl-20 pl-10 pr-20 lg:pr-72 mt-6 pb-6 overflow-x-auto sm:rounded-lg">
                    <table className="w-full font-badscipt-regular text-sm text-left text-blue-100 dark:text-black">
                        <thead className="text-lg text-black border-b-2 border-gray-900 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Thema
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 border-l-2 border-gray-900"
                            >
                                Nu
                            </th>
                            <th scope="col" className="px-6 py-3 border-l border-gray-900">
                                Straks
                            </th>
                            <th scope="col" className="px-6 py-3 border-l border-gray-900">
                                Later
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th
                                id="theme_header"
                                scope="row"
                                className="px-6 py-4 font-medium text-lg text-black whitespace-nowrap dark:text-black"
                            >
                                {props.title}
                            </th>
                            <td className="px-6 py-4 border-l-2 border-gray-900">
                                <Dropdown id="dropdown1" title={"Score nu"}/>
                            </td>
                            <td className="px-6 py-4 border-l border-gray-900 ">
                                <Dropdown id="dropdown2" title={"Score straks"}/>
                            </td>
                            <td className="px-6 py-4 border-l border-gray-900">
                                <Dropdown id="dropdown3" title={"Score later"}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

