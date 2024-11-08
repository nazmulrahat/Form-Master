import { useContext } from "react";
import { AssetContex } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContex)
    return (
        <div>
            <h1>Special</h1>
            <p>has:{asset}</p>
            <p>also has : {gift}</p>
        </div>
    );
};

export default Special;