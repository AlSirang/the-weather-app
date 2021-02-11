import { useState, useEffect } from "react";
import "./Temperature.css";

// helper function to convert temperature
const kelvinToFahrenheit = (k) => ((k - 273.15) * 9) / 5 + 32;
const fahrenheitToCelcius = (f) => (f - 32) / (9 / 5);
const celciusToFahrenheit = (c) => c * (9 / 5) + 32;

export const Temperature = ({ temp }) => {
    // convert temperature to Fahrenhite as default
    let tempFar = kelvinToFahrenheit(temp);

    const [t, setTemp] = useState(tempFar);
    const [isScaleF, setScale] = useState(true);

    // rerender if the temperature changes.
    // temperature will change when the user does a search
    // and the new temperature will be sent to this component.
    useEffect(() => {
        setTemp(tempFar);
    }, [tempFar]);

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
            {/* disply only one digit after decimal place  */}
            {t.toFixed(1)}
            <span onClick={handleChange}>
                <span className="pointer"> &deg;{isScaleF ? "F" : "C"}</span>
            </span>
        </span>
    );
};
