// @ts-ignore
import React, {createContext} from "react";
// @ts-ignore
import ReactDOM from "react-dom";
import AppContext from "./contexts/AppContext";

import "./index.css";

import LandingPage from "./components/LandingPage";

const App = () => (
    <div className="container">
        <AppContext.Provider value={{selected: ""}}>
        <LandingPage />
        </AppContext.Provider>
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
