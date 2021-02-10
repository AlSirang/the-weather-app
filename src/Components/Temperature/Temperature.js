import { useState } from "react";
import "./Temperature.css";

// helper function to convert temperature
const kelvinToFahrenheit = (k) => ((k - 273.15) * 9) / 5 + 32;
const fahrenheitToCelcius = (f) => (f - 32) / (9 / 5);
const celciusToFahrenheit = (c) => c * (9 / 5) + 32;

export const Temperature = ({ temp }) => {
    const [t, setTemp] = useState(kelvinToFahrenheit(temp));
    const [isScaleF, setScale] = useState(true);

    const handleChange = () => {
        setScale((p) => {
            return !p;
        });
        setTemp((p) =>
            isScaleF ? fahrenheitToCelcius(p) : celciusToFahrenheit(p)
        );
    };
    return (
        <span>
            {" "}
            {/* disply only one digit after decimal */}
            {t.toFixed(1)}
            <span onClick={handleChange}>
                <span className="pointer"> &deg;{isScaleF ? "F" : "C"}</span>
            </span>
        </span>
    );
};
