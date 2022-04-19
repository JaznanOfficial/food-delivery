import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Breakfast from "./Components/Breakfast/Breakfast";
import Lunch from "./Components/Lunch/Lunch";
import Dinner from "./Components/Dinner/Dinner";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/*" element={<HomePage />}>
                        <Route path="breakfast" element={<Breakfast />}></Route>
                        <Route path="lunch" element={<Lunch />}></Route>
                        <Route path="dinner" element={<Dinner />}></Route>
                    </Route>
                    <Route path="/home/*" element={<HomePage />}>
                        <Route path="breakfast" element={<Breakfast />}></Route>
                        <Route path="lunch" element={<Lunch />}></Route>
                        <Route path="dinner" element={<Dinner />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
