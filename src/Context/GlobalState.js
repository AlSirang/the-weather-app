import { useState, createContext, useEffect } from "react";

const initialState = {
    name: "",
    main: { temp: 0.0, feels_like: 0.0 },
    weather: [{ description: "No Data Found...", icon: false }],
}; // default city

export const GlobalContext = createContext(initialState);
// OpenWeather Info
const openWeatherKey = "d69e0727acd9e490bf7ec55cfab5377d";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

export const GlobalProvider = ({ children }) => {
    const [forcast, setForcast] = useState(initialState);
    const [city, setCity] = useState("Islamabad");

    useEffect(() => {
        async function a() {
            const urlToFetch = `${weatherUrl}?&q=${city}&APPID=${openWeatherKey}`;
            try {
                const response = await fetch(urlToFetch);
                if (response.ok) {
                    response.json().then((value) => {
                        setForcast(value);
                    });
                } else {
                    throw Error(response.statusText);
                }
            } catch (err) {
                setForcast(initialState);
            }
        }
        a();
    }, [city]);

    return (
        <GlobalContext.Provider value={{ forcast, setCity }}>
            {children}
        </GlobalContext.Provider>
    );
};
