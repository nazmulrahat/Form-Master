import { useContext } from "react";
import { AssetContex } from "../Grandpa/Grandpa";

const Friend = () => {
    const gif = useContext(AssetContex)
    return (
        <div>
            <h1>Friend</h1>
            <p>{gif}</p>
        </div>
    );
};

export default Friend;