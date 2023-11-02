import React from "react";
import SmallButton from "./SmallButton";
import {RxCross2} from "react-icons/rx";
import {Link} from "react-router-dom";

const Modal = (props) => {
    if (!props.show) {
        return null
    }

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center align-middle bg-gray-400/[0.6]">
            <div className="w-72 bg-[#EFEFEF] rounded-3xl h-56 my-auto">
                <div className="relative flex flex-row">
                    <h4 className="font-avenirnext-demi font-black text-lg mt-6 ml-8">{props.title}</h4>
                </div>
                <div className="mt-4 mx-8 text-xs font-avenirnext-regular">
                    {props.description}
                </div>
                <div className='mt-3 ml-6'>
                        <SmallButton chevron={true} title={props.buttonText} onClick={props.onClick}/>
                </div>
            </div>
        </div>
    );
};
export default Modal;
