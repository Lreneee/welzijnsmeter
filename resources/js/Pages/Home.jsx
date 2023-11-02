import React from "react";
import og_logo from '../images/logo-og.png';
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";
import header from "../images/banner-1.jpg";

export default function Home() {
    return (
        <div>
            <img
                src={og_logo}
                className="w-28 h-auto absolute z-40 right-0 mr-4 mt-4"
            />
            <div className="items-center  flex">
                <div className="absolute z-40 ml-28 mt-14 md:mt-0">
                    <h1 className="text-white font-black font-avenirnext-heavy text-3xl">
                        De welzijnsmeter
                    </h1>
                    <p className="text-white text-sm font-avenirnext-regular mt-2 w-80">
                        Ook jij gaat in deze toekomst vooruit! De volgende onderwerpen zie
                        jij onwijs positief in. Toch willen wij jou g
                    </p>
                    <Link to="/gegevens">
                        <button className="bg-[#C93E5C] rounded-xl drop-shadow-xl mt-4">
                            <div className="flex flex-row px-4 py-3">
                                <p className="text-white font-avenirnext-bold ">
                                    Vul de welzijnsmeter in
                                </p>
                                <img src={arrow} className="w-6 h-6 ml-3" alt="arrow" />
                            </div>
                        </button>
                    </Link>
                </div>
                <img
                    src={header}
                    alt="header"
                    className="w-full h-80 md:h-full object-cover"
                />
            </div>
        </div>
    );
}
