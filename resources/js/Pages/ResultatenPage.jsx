import React, {useEffect} from "react";
import header from "../images/banner-1.jpg";
import og_logo from "../images/logo-og.png";
import CollapseItem from "../Elements/CollapseItem";
import {getThemesAdvices} from "../Api/themes";
import ObjectRow from "../Elements/ObjectRow";
import {useLocation} from "react-router-dom";
import {getAllResults} from "../Api/session";
import jsPDF from "jspdf";
import SmallButton from "../Elements/SmallButton";
import autoTable from "jspdf-autotable";

let sessionID = 0;
const ResultatenPage = () => {
    const [advices, setAdvices] = React.useState(null);
    const [collapseElement, setCollapseElement] = React.useState(null);
    const [results, setResults] = React.useState(null);
    const location = useLocation();
    let body = []

    const doc = new jsPDF({
        orientation: "p", //set orientation
        unit: "pt", //set unit for document
        format: "letter" //set document standard
    });
    const btn = document.querySelector("button");
    const input = document.querySelector("input");
    const data1 = 'Type/Type',
        data2 = 'asidghalwkghuahewlgauhlwegnva',
        status = 'STATUS',
        creator = 'James Dean',
        date = new Date();
    const sizes = {
        xs: 10,
        sm : 14,
        p: 16,
        h3: 18,
        h2: 20,
        h1: 22
    };
    const fonts = {
        times: 'Times',
        helvetica: 'Helvetica'
    };
    const margin = 0.5; // inches on a 8.5 x 11 inch sheet.
    const verticalOffset = margin;
    var columns = [
        {title: "Thema", dataKey: "col1"},
        {title: "Nu", dataKey: "col2"},
        {title: "Straks", dataKey: "col3"},
        {title: "Later", dataKey: "col4"}
    ];

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
            setResults(data)
            updateAdvices()
        }).catch(error => {
            console.error(error);
        });
    }
    const updateAdvices = () => {
        getThemesAdvices().then((advices) => {
            setAdvices(advices);
        }).catch((error) => {
            console.log(error)
        });
    };
    const createBodyPDF = (theme, nu, straks, later, advies) => {
        let new_array = [theme, nu, straks, later]
        body.push(new_array)
        console.log(new_array)
        if(body.length === 10){
            doc.text("Jouw scores van de Welzijnsmeter", 170,40, 'center')
            doc.autoTable(columns, body, {
                styles: {
                    fillColor: [51,51,51],
                    lineColor: 240,
                    lineWidth: 1,
                },
                columnStyles: {
                    col1: {fillColor: false},
                    col2: {fillColor: false},
                    col3: {fillColor: false},
                    col4: {fillColor: false},
                    col5: {fillColor: false},
                    col6: {fillColor: false},
                },
                margin: {top: 60},
                addPageContent: function(data) {
                    doc.text("", 40, 30);
                }
            });
        }
    }

    const createElements = () => {
        const adviceElements = [];
        if (advices != null) {
            for (let i = 0; i < advices.length; i++) {
                let notesList = [];
                notesList.push(advices[i].note1)
                notesList.push(advices[i].note2)
                notesList.push(advices[i].note3)
                notesList.push(advices[i].note4)
                if(results[i].number_nu===0 && results[i].number_straks===0 && results[i].number_later===0){
                    createBodyPDF(advices[i].theme_name, results[i].number_nu,results[i].number_straks, results[i].number_later, notesList)
                    continue;
                } else{
                    createBodyPDF(advices[i].theme_name, results[i].number_nu,results[i].number_straks, results[i].number_later, notesList)
                    adviceElements.push(<CollapseItem nu={results[i].number_nu}
                                                      straks={results[i].number_straks}
                                                      later={results[i].number_later}
                                                      title={advices[i].theme_name}
                                                      header_title={advices[i].header_title}
                                                      button_link={advices[i].button_link}
                                                      button_name={advices[i].button_name}
                                                      notes={notesList}/>);
                }
            }
        }
        return adviceElements;
    }
    useEffect(() => {
        getSessionID()
    }, [])
    useEffect(() => {
        getResults()
    }, [])
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
                        Jouw resultaten
                    </h1>
                </div>
                <img
                    src={header}
                    alt="header"
                    className="w-full h-80 object-cover"
                />
            </div>
            <div className="flex justify-center items-center">
                <p className="text-xs font-avenirnext-regular w-1/2 mt-10">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book.the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.</p>
            </div>
            <div className="w-1/2 mx-auto">
                <div className="flex flex-row space-x-4 justify-end " id="print_download_button">
                    <SmallButton chevron={false} title="Download resultaten" onClick={() => {
                        doc.save(`Welzijnsresultaten.pdf`);
                    }
                    }></SmallButton>
                </div>
            </div>
            <div className="mb-8">
                {createElements()}
            </div>
        </div>
    );
};
export default ResultatenPage;
