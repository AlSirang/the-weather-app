import "./SearchBar.css";
import { GlobalContext } from "../../Context/GlobalState";
import { useState, useContext } from "react";

export const SearchBar = () => {
    const [location, updateLocation] = useState("");
    const { setCity } = useContext(GlobalContext);
    const handleChange = (e) => {
        updateLocation(e.target.value);
    };
    const handleSumbit = (e) => {
        e.preventDefault();
        setCity(location);
    };

    return (
        <div className="flex container">
            <form className="form flex  ">
                <input
                    className="input"
                    type="text"
                    name="location"
                    id="locaiton"
                    placeholder="Location e.g. Islamabad"
                    value={location}
                    onChange={handleChange}
                />
                <button type="submit" className="btn" onClick={handleSumbit}>
                    Search
                </button>
            </form>
        </div>
    );
};
