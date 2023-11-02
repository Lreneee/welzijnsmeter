import {Link, useNavigate} from "react-router-dom";
import React from "react";
import header from "../images/banner-1.jpg";
import og_logo from "../images/logo-og.png";
import Button from "../elements/Button";
import {createSession} from "../Api/session";
import ModalEasy from "../Elements/ModalEasy";

const InfoPage = () => {
    // let genderID = ""
    // let ageID = 0
    let sessionID = 0
    const navigate = useNavigate();
    const [ageID, setAge] = React.useState(0);
    const [genderID, setGender] = React.useState("");
    const [showModal, setShowModal] = React.useState(false);

    const createNewSession = () => {
        createSession({
            gender: genderID,
            age: ageID,
        }).then((data) => {
            console.log(data.id)
            sessionID = data.id
            navigate('/uitleg', {state: {id: sessionID}});
        }).catch(error => {
            console.error(error);
        });
    }
    const selectAge = (age) => {
        if (age == "+") {
            setAge(51)
            document.getElementById("+").className =
                "bg-[#C93E5C] hover:bg-[#C22B4C] text-white px-6 py-1 rounded-lg ";
            document.getElementById("-").className =
                "px-6 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA]";
        } else if (age == "-") {
            setAge(49)
            document.getElementById("-").className =
                "bg-[#C93E5C] hover:bg-[#C22B4C] text-white px-6 py-1 rounded-lg ";
            document.getElementById("+").className =
                "px-6 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA]";
        }
    }
    const selectGender = (gender) => {
        setGender(gender)
        if (gender === "man") {
            document.getElementById("man").className =
                "bg-[#C93E5C] hover:bg-[#C22B4C] text-white px-6 py-1 rounded-lg mr-1.5 mt-1.5";
            document.getElementById("vrouw").className =
                "px-6 mr-1.5 mt-1.5 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA]";
            document.getElementById("anders").className =
                "px-6 mr-1.5 mt-1.5 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA]";
        } else if (gender === "vrouw") {
            document.getElementById("vrouw").className =
                "bg-[#C93E5C] hover:bg-[#C22B4C] text-white px-6 py-1 rounded-lg mr-1.5 mt-1.5";
            document.getElementById("man").className =
                "px-6 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA] mr-1.5 mt-1.5";
            document.getElementById("anders").className =
                "px-6 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA] mr-1.5 mt-1.5";
        } else if (gender === "anders") {
            document.getElementById("anders").className =
                "bg-[#C93E5C] hover:bg-[#C22B4C] text-white px-6 py-1 rounded-lg mr-1.5 mt-1.5";
            document.getElementById("vrouw").className =
                "px-6 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA] mr-1.5 mt-1.5";
            document.getElementById("man").className =
                "px-6 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA] mr-1.5 mt-1.5";
        }
    }
    return (
        <div>
            <div>
                <img
                    src={og_logo}
                    className="w-28 h-auto absolute z-40 left-0 ml-4 mt-4"
                />
                <div className="items-end flex">
                    <div
                        className="absolute z-40 mb-10 left-1/2 transform -translate-x-1/2 sm:left-0 sm:transform-none sm:translate-x-0 sm:left-24 md:mt-0">
                        <h1 className="text-white font-black font-avenirnext-heavy text-3xl">
                            Jouw gegevens
                        </h1>
                    </div>
                    <img
                        src={header}
                        alt="header"
                        className="w-full h-80 object-cover"
                    />
                </div>
            </div>
            <p className="font-avenirnext-regular text-sm mx-24 mt-12">
                Ook jij gaat in deze toekomst vooruit! De volgende onderwerpen zie jij
                onwijs positief in. Toch willen wij jou graag nog wat advies geven wat
                er nog beter kan. Lees de volgende onderwerpen nog eens goed door.
                Toch nog meer advies nodig? Je kan altijd contact met ons opnemen via
                071-34223423.
            </p>
            <div className="mx-24">
                <h2 className="font-avenirnext-bold mt-4">Leeftijd</h2>
                <div className="-flex flex-col sm:flex-row space-x-4 mt-4">
                    <button
                        onClick={() => {
                            selectAge("-");
                        }}
                        id="-"
                        className="px-6 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA]"
                    >
                        50-
                    </button>
                    <button
                        onClick={() => {
                            selectAge("+");
                        }}
                        id="+"
                        className="px-6 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA]"
                    >
                        50+
                    </button>
                </div>
            </div>
            <div className="mx-24">
                <h2 className="font-avenirnext-bold mt-4">Geslacht</h2>
                <div className="flex sm:flex-row flex-wrap mt-4">
                    <button
                        id="man"
                        onClick={() => {
                            selectGender("man");
                        }}
                        className="px-6 mr-1.5 mt-1.5 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA]"
                    >
                        Man
                    </button>
                    <button
                        id="vrouw"
                        onClick={() => {
                            selectGender("vrouw");
                        }}
                        className="px-6 mr-1.5 mt-1.5 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA]"
                    >
                        Vrouw
                    </button>
                    <button
                        id="anders"
                        onClick={() => {
                            selectGender("anders");
                        }}
                        className="px-6 mr-1.5 mt-1.5 py-1 rounded-lg border-[#EDEAEA] border-2 bg-[#FBFBFB] hover:bg-[#EDEAEA]"
                    >
                        Anders
                    </button>
                </div>
            </div>
            <div className="mx-24 mt-4 mb-8">
                <Button direction="right" text="Naar de uitleg" onClick={() => {
                    if (genderID !== "" && ageID !== 0) {
                        createNewSession()
                    } else {
                        setGender(genderID)
                        setAge(ageID)
                        setShowModal(true)

                    }
                }
                }></Button>
            </div>
            <ModalEasy show={showModal} onClick={() => {
                setShowModal(false)
            }} title={"We missen nog gegevens!"}
                       description={genderID===""&&ageID===0 ? "U heeft nog niet uw leeftijd en geslacht opgegeven. Vul deze eerst in.": genderID===""&&ageID!==0 ? "U heeft nog niet uw geslacht opegeven. Vul deze eerst in." : "U heeft nog niet uw leeftijd opgegeven. Vul dit eerst in." }
                       buttonText={"Pas gegevens aan"}/>
        </div>
    );
}
export default InfoPage;
