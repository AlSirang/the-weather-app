import { Card } from "./Components/Card/Card";
import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { GlobalProvider } from "./Context/GlobalState";
function App() {
    return (
        <>
            <Header />
            <main className="center">
                <GlobalProvider>
                    <SearchBar />
                    <Card />
                </GlobalProvider>
            </main>
        </>
    );
}

export default App;
