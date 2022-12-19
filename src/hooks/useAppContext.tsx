//@ts-ignore
import React, {useContext} from "react";
import AppContext from "../contexts/AppContext";

const useAppContext = () => {
    const appContext = useContext(AppContext);
    return appContext;
}
export default useAppContext;
