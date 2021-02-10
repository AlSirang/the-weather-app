import "./Card.css";
import { useContext } from "react";
import { Temperature } from "../Temperature/Temperature";
import logo from "../Header/cloud.png";

import { GlobalContext } from "../../Context/GlobalState";

export const Card = () => {
    const { forcast } = useContext(GlobalContext);
    const imgSrc = forcast.weather[0].icon
        ? `https://openweathermap.org/img/wn/${forcast.weather[0].icon}@2x.png`
        : logo;
    if (forcast.weather[0].icon) {
        return (
            <>
                <div className="container-card flex colored-section">
                    <div className="box">
                        <div className="info">
                            <h3 className="city-name">{forcast.name}</h3>
                            <h3 className="heading"> current Weather</h3>
                            <p className="sub-heading">Tuesday</p>
                            <p className="sub-heading">
                                Temperature:{" "}
                                <Temperature temp={forcast.main.temp} />
                            </p>
                            <p className="sub-heading">
                                Feels Like:
                                <Temperature temp={forcast.main.feels_like} />
                            </p>
                            <p className="sub-heading">
                                Condition: {forcast.weather[0].description}
                            </p>
                        </div>
                        <div className="img">
                            <img src={imgSrc} className="img" alt="cloud" />
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <div className="container-card flex colored-section">
                <div className="box">
                    <div className="info">
                        <h3 className="city-name">
                            {forcast.weather[0].description}
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
};
