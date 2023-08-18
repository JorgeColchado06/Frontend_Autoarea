import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {db} from '../components/API';
import Cookies from 'js-cookie';
export const PurchasesContext = createContext();

const PurchasesProvider = ({ children }) => {
    const [history, setHistory] = useState([]);

    const getData = async () => {
        const id = Cookies.get("Session_Event");
        const response = await axios.get(`${db}/history/${id}`);
        const data = await response.data;
        setHistory(data);
    }

    useEffect(() => {
        getData();
    }, []);
return (
<PurchasesContext.Provider value={{ history }}>
{children}
</PurchasesContext.Provider>
);
}

export default PurchasesProvider;