import React, {useState} from 'react';
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import theme_image from "../images/image_2.png"
import SmallButton from "./SmallButton";
import LineChart from "./LineChart";
import {CategoryScale, Chart, LinearScale, LineElement, PointElement, Tooltip} from "chart.js";

const CollapseItem = (props) => {
    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open)
    };


    return (
        <div>
            <div className="flex justify-center items-center">
                <div
                    className={!open ? "mt-4 rounded-3xl w-1/2 bg-light-green h-12 drop-shadow-lg" : "mt-4 rounded-t-3xl rounded-b-none w-1/2 bg-light-green h-12 drop-shadow-lg"}>
                    <div className="flex flex-row">
                        <h2 className="font-avenirnext-bold mt-2.5 ml-8 w-44">{props.title}</h2>
                        <div className="flex grow justify-center items-center flex-row space-x-7 mt-2.5">
                            <p className="font-badscipt-regular">{props.nu}</p>
                            <p className="font-badscipt-regular">{props.straks}</p>
                            <p className="font-badscipt-regular">{props.later}</p>
                        </div>
                        {!open ? <FaChevronDown className="mr-8 mt-4 text-gray-600" onClick={toggle}/> :
                            <FaChevronUp className="mr-8 mt-4 text-gray-600" onClick={toggle}/>}
                    </div>
                </div>
            </div>
            {open && (
                <div className="flex justify-center items-center">
                    <div className="w-1/2 bg-darker-green rounded-b-3xl grid grid-cols-3">
                        <div className="p-8 col-span-2">
                            <div className="grid grid-cols-4 gap-4">
                                <img className="h-44 rounded-3xl object-cover col-span-1" src={theme_image}
                                     alt="theme alt"/>
                                <div className="flex flex-col col-span-3    ">
                                    <h2 className="font-avenirnext-bold text-xs">{props.header_title}</h2>
                                    <ul className="list-disc font-avenirnext-regular text-xs mt-2 ml-2">
                                        <li>{props.notes[0]}</li>
                                        <li>{props.notes[1]}</li>
                                        <li>{props.notes[2]}</li>
                                        <li>{props.notes[3]}</li>
                                    </ul>
                                    {/*<p className="mt-2 font-avenirnext-regular text-xs">Lorem Ipsum is simply dummy text*/}
                                    {/*    of the printing and typesetting industry. Lorem*/}
                                    {/*    Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy*/}
                                    {/*    text of the printing and typesetting industry. </p>*/}
                                    {props.button_link !== "" ?
                                        <a href={props.button_link} target="_blank">
                                            <SmallButton title={props.button_name} chevron={true} onClick={() => {
                                            }}/>
                                        </a>
                                        : <div></div>}
                                </div>
                            </div>
                        </div>
                        <div className="my-auto mr-4">
                            <LineChart title={props.title} nu={props.nu} straks={props.straks} later={props.later}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default CollapseItem;
