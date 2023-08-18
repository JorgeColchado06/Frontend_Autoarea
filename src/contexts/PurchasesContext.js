import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {db} from '../components/API';

export const PurchasesContext = createContext();

const PurchasesProvider = ({ children }) => {
    const [history, setHistory] = useState([]);

    const getData = async () => {
        const response = await axios.get(`${db}/history/1`);
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