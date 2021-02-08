import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
function App() {
    return (
        <>
            <Header />
            <div className="flex container">
                <SearchBar />
            </div>
        </>
    );
}

export default App;
