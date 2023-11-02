import React from "react";
import arrow from "../images/arrow.png";
import arrowleft from "../images/arrowleft.png";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.direction == "left") {
            return (
                <button
                    onClick={this.props.onClick}
                    className="bg-[#C93E5C] rounded-xl drop-shadow-xl mt-4"
                >
                    <div className="flex flex-row px-4 py-3 items-center">
                        <img src={arrowleft} className="w-4 h-4 mr-3" alt="arrow" />
                        <p className="text-white font-avenirnext-bold">
                            {this.props.text}
                        </p>
                    </div>
                </button>
            );
        } else if (this.props.direction == "right") {
            return (
                <button
                    onClick={this.props.onClick}
                    className="bg-[#C93E5C] rounded-xl drop-shadow-xl mt-4"
                >
                    <div className="flex flex-row px-4 py-3 items-center">
                        <p className="text-white font-avenirnext-bold">
                            {this.props.text}
                        </p>
                        <img src={arrow} className="w-4 h-4 ml-3" alt="arrow" />
                    </div>
                </button>
            );
        } else{
            return (
                <button
                    onClick={this.props.onClick}
                    className="bg-[#C93E5C] rounded-xl drop-shadow-xl mt-4"
                >
                    <div className="flex flex-row px-4 py-3 items-center">
                        <p className="text-white font-avenirnext-bold">
                            {this.props.text}
                        </p>
                    </div>
                </button>
            );
        }
    }
}
