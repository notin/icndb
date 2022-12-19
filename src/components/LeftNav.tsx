// @ts-ignore
import React, {useState, useEffect, useReducer, useContext} from "react";
// @ts-ignore
import ReactDOM from "react-dom";
import "../index.css";
import useAppContext from "../hooks/useAppContext";

const LeftNav = () => {

    const appContext = useAppContext();
    const [selected, setSelected] = useReducer((state, action) => {
        return action;
    }, "");

    const selectState = (event : React.MouseEventHandler ) => {
        const target = event.target as HTMLInputElement;
        setSelected(target.value);
    }


    let categories = <ul><li><div onClick={selectState}>Random</div></li></ul>;
    return categories
}
export default LeftNav;
