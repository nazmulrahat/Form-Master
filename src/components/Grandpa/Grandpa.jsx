import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContex = createContext('Gold')
export const MoneyContex = createContext(1000)

const Grandpa = () => {
    const [money,setMoney] = useState(1000)
    const asset = 'diamond'
    return (
        <div className="grandpa ">
            <h1>Grandpa</h1>
        <MoneyContex.Provider value={[money,setMoney]}>
        <AssetContex.Provider value="Gold">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContex.Provider>
        </MoneyContex.Provider>

        </div>
    );
};

export default Grandpa;