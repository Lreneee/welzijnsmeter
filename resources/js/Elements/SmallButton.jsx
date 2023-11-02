import react from "react";
import {FaChevronRight, AiOutlineCloudDownload} from "react-icons/all";

const SmallButton = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className="bg-og-red mt-4 rounded-2xl drop-shadow-lg">
                <div className="flex flex-row py-2 px-4">
                    <p className="font-avenirnext-bold text-white text-xs">{props.title}</p>
                    {props.chevron ? (<FaChevronRight className="text-white my-auto ml-1"/>) : (
                        <AiOutlineCloudDownload className="text-white my-auto ml-1"/>)}
                </div>
            </button>
        </div>
    );
}
export default SmallButton;
