import React, {useEffect} from "react";
import og_logo from "../images/logo-og.png";
import header from "../images/banner-1.jpg";
import ObjectRow from '../elements/ObjectRow';
import {Link, useLocation} from "react-router-dom";
import Button from "../elements/Button";
import {getAllResults} from "../Api/session";

let scores = [];
let sessionID = "";
const SamenvattingPage = () => {
    const [rows, setRows] = React.useState([])
    const location = useLocation();

    const getSessionID = () => {
        if (location.state != null) {
            console.log("session id defined")
            sessionID = location.state.id
        } else {
            return
        }
    }
    const getResults = () => {
        getAllResults({
            session_id: sessionID
        }).then((data) => {
            scores = data
            const rowsTemp = [];
            for (let i = 0; i < scores.length; i++) {
                if (scores[i].number_nu === 0 && scores[i].number_straks === 0 && scores[i].number_later === 0) {
                    continue;
                } else {
                    rowsTemp.push(<ObjectRow key={i} name={scores[i].theme_name} nu={scores[i].number_nu}
                                             straks={scores[i].number_straks} later={scores[i].number_later}/>);
                }
            }
            setRows(rowsTemp);
            // return <tbody>{rows}</tbody>;
        }).catch(error => {
            console.error(error);
        });
    }
    useEffect(() => {
        getSessionID()
        console.log(sessionID)
        getResults()
    }, []);

    return (
        <div>
            <img
                src={og_logo}
                className="w-28 h-auto absolute z-40 right-0 mr-4 mt-4"
            />
            <div className="items-end justify-center flex">
                <div className="absolute z-40 mb-14 md:mt-0">
                    <h1
                        id="header_element"
                        className="text-white font-black font-avenirnext-heavy text-3xl"
                    >
                        Jouw rapport
                    </h1>
                </div>
                <img
                    src={header}
                    alt="header"
                    className="w-full h-80 object-cover"
                />
            </div>
            {/*<div className="pl-32 mt-8">*/}
            {/*    <Link to="/meter">*/}
            {/*        <Button  direction="left" text="Rapport aanpassen"></Button>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            <div className="px-8 md:px-30 lg:px-80 mt-6">
                <div className="bg-background rounded-2xl">
                    {/*<h1 className="font-avenirnext-demi font-black text-2xl px-24 ml-6 pt-10">*/}
                    {/*    Jouw rapport*/}
                    {/*</h1>*/}
                    <div className="overflow-x-auto sm:rounded-lg px-0 lg:px-32 mt-10 pb-6">
                        <table
                            className="w-full font-badscipt-regular text-sm text-left text-blue-100 dark:text-black mt-6">
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
                            <tbody className="mb-6">{rows}</tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-4 justify-center mb-4">
                <Link to="/resultaten" state={{id: sessionID}}>
                    <Button text="Naar jouw resultaten"></Button>
                </Link>
            </div>
        </div>
    );
};
export default SamenvattingPage;
