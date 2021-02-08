import "./SearchBar.css";
import { useState } from "react";
export const SearchBar = () => {
    const [location, updateLocation] = useState("");
    const handleChange = (e) => {
        updateLocation(e.target.value);
    };
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(location);
    };

    return (
        <>
            <form className="form flex">
                <input
                    className="input"
                    type="text"
                    name="location"
                    id="locaiton"
                    placeholder="Location e.g. London"
                    value={location}
                    onChange={handleChange}
                />
                <button type="submit" className="btn" onClick={handleSumbit}>
                    Search
                </button>
            </form>
        </>
    );
};
