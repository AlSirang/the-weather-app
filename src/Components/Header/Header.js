import logo from "./cloud.png";
import "./Header.css"
export const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="cloud and sun" className="logo" />
            <h2 className="title">the Weather App</h2>
        </div>
    );
};
