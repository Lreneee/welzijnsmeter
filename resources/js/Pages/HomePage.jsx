import React from "react";
import og_logo from '../images/logo-og.png';
import og_logo_wit from '../images/OG_logo_wit.svg'
import flow from '../images/flowOG.png';
import {Link} from "react-router-dom";
import arrow from "../images/arrow.png";
import header from "../images/banner-1.jpg";

export default function HomePage() {
    return (<div>
            <img
                src={og_logo}
                className="w-28 h-auto absolute z-40 right-0 mr-4 mt-4"
            />
            <div className="items-center  flex">
                <div
                    className="absolute z-40 top-40 left-1/2 transform -translate-x-1/2 sm:transform-none sm:translate-x-0 sm:left-24 sm:top-32 md:mt-0">
                    <h1 className="text-white font-black font-avenirnext-heavy text-4xl">
                        Welkom bij de welzijnsmeter!
                    </h1>
                    <p className="text-white text-sm font-avenirnext-regular mt-2 w-80">
                        Hier krijgt u direct inzicht in uw welzijn en tips om dit te verbeteren! Door de meter in te
                        vullen
                        denkt u bewust na over 10 verschillende thema’s die uw welzijn beïnvloeden.
                    </p>
                    <Link to="/gegevens">
                        <button className="bg-[#C93E5C] rounded-xl drop-shadow-xl mt-4">
                            <div className="flex flex-row px-4 py-3">
                                <p className="text-white font-avenirnext-bold">
                                    Vul de welzijnsmeter in
                                </p>
                                <img src={arrow} className="w-6 h-6 ml-3" alt="arrow"/>
                            </div>
                        </button>
                    </Link>
                </div>
                <span
                    className="absolute bottom-5 left-1/2 transform -translate-x-1/2 inline-block animate-bounce rounded-full p-4 bg-white text-black text-sm">
        <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"/>
        </svg>
    </span>
                <img
                    src={header}
                    alt="header"
                    className="w-screen h-screen object-cover"
                />
            </div>
            <div className="bg-[#5C84B2] mt-10 mx-72 rounded-xl drop-shadow-lg">
                <div className="mx-6 py-6">
                    <h1 className="font-avenirnext-bold text-2xl text-white">Hoe vul ik de welzijnsmeter in? </h1>
                    <p className="text-sm font-avenirnext-regular mt-2 text-white">Heel simpel! U geeft met een rapportcijfer aan
                        hoe u
                        zich voelt bij de verschillende thema's. U geeft
                        een cijfer per levensfase waar u in zit en waar u nog in komt. Weet u niet zeker welk cijfer u
                        moet
                        geven? Geen probleem! Per thema vindt u onder de i-button uitleg om u verder te helpen. </p>
                    <img src={flow} className="mx-auto w-1/2 mt-2"/>

                </div>
            </div>
            <div className="mt-6 bg-[#EEE5E5] mx-72 rounded-xl drop-shadow-lg">
                <div className="mx-6 py-6">
                    <h1 className="font-avenirnext-bold text-2xl">Wetenschappelijke basis</h1>
                    <p className="text-sm font-avenirnext-regular mt-2">De Erasmus School of Health Policy & Management, facultair onderdeel van de Erasmus Universiteit
                        Rotterdam, heeft een instrument ontwikkeld om individueel welzijn te meten. Hier is onderzoek
                        gedaan
                        naar het individuele welzijn onder een generieke populatie van volwassenen (18+). Het instrument
                        is
                        getest aan de hand van interviews met experts en online enquêtes. Het proces en hun onderzoek
                        hebben
                        geleid tot een versie van het instrument met tien items: The Well-being instrument-10 (WiX).
                        Deze
                        welzijnsmeter is gebaseerd op dit wetenschappelijke instrument en onderscheidt zich in de
                        doelgroep
                        van 50-plussers.</p>
                </div>
            </div>
            <div id="footer" className="bg-og-red w-full mt-10">
                <img src={og_logo_wit} className="py-10 w-40 h-40 ml-8"/>
            </div>
        </div>
    );
}
