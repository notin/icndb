// @ts-ignore
import React, {useReducer} from "react";
// @ts-ignore
import ReactDOM from "react-dom";
import LeftNav from "./LeftNav";
import useAppContext from "../hooks/useAppContext";
const Body = () => {


    const useAppContext1 = useAppContext();
    const [selected, setSelected] = useReducer((state, action) => {
        return action;
    }, "");

    const getBody = ():any =>  {
        let body = <div/>;
        if (selected === "Random") {
            //@ts-ignore
            body = <div>make call!</div>
        }
        return body;
    }

    const getPage = () => {
        const page = <div>
        </div>
        return page;
    }

    return getPage();
}
export default Body;
