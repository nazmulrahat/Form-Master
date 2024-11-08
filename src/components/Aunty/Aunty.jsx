import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContex } from "../Grandpa/Grandpa";
const Aunty = () => {
    const [money,setMoney] = useContext(MoneyContex)
    return (
        <div>
            <h1>Aunty</h1>
            <section className="flex">
                <Cousin name={'Rifat'}></Cousin>
                <Cousin name={'Rabiea'}></Cousin>
            </section>
            <p>Money : {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add 1000tk</button>
        </div>
    );
};

export default Aunty;