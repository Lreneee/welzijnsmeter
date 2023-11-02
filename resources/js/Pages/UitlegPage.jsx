import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../Elements/Button";
import og_logo from "../images/logo-og.png";
import header from "../images/banner-1.jpg";

const UitlegPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let sessionID = 0;


    const getSessionID = () => {
        if (location.state != null) {
            console.log("session id defined")
            sessionID = location.state.id
        } else {
            return
        }
    }
    const startSession = () => {
        navigate('/meter', {state: {id: sessionID}})
    }

    useEffect(() => {
        getSessionID();
    }, []);

    return (
        <section>
            <div>
                <img
                    src={og_logo}
                    className="w-28 h-auto absolute z-40 left-0 ml-4 mt-4"
                />
                <div className="items-end flex">
                    <div
                        className="absolute z-40 mb-10 left-1/2 transform -translate-x-1/2 sm:left-0 sm:transform-none sm:translate-x-0 sm:left-24 md:mt-0">
                        <h1 className="text-white font-black font-avenirnext-heavy text-3xl">
                            De uitleg
                        </h1>
                    </div>
                    <img
                        src={header}
                        alt="header"
                        className="w-full h-80 object-cover"
                    />
                </div>
            </div>
            <div className="mx-24 ">
                <p className="font-avenirnext-regular text-sm mt-12 mb-4">U gaat zo de welzijnsmeter invullen. Voor elk
                    van
                    de tien thema's geef u aan de hand van een cijfer 1 tot en met 10 aan hoe u denkt over uw welzijn
                    binnen
                    dit thema voor de situaties nu, straks en later. Mocht u twijfelen over welk cijfer te geven, dan
                    kunt u
                    voor elk thema het informatievak bekijken voor tips. Het invullen van de hele welzijnsmeter duurt
                    enkele
                    minuten. Vervolgens krijgt u een eindrapport. Dit is een samenvatting van uw welzijn in cijfers met
                    tips
                    per thema om uw welzijn te verbeteren. is het thema niet van toepassing binnen uw welzijn, of heeft
                    u
                    écht geen idee wat voor cijfer te moeten geven. Dan kunt u de invulvelden gewoon leeg laten. </p>
                <Button direction='right' text="Start de Welzijnsmeter" onClick={() => {
                    startSession()
                }}/>
            </div>

        </section>
    )
}
export default UitlegPage;
