import { useContext } from "react";
import { MoneyContex } from "../../Grandpa/Grandpa";


const Sister = () => {
    const money = useContext(MoneyContex)
    return (
        <div>
            <h1>Sister</h1>
            <p>Grandpa give me {money}tk</p>
        </div>
    );
};

export default Sister;