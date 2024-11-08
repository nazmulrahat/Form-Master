import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h1>uncle</h1>
            <section className="flex">
                <Cousin asset={asset} name={'Rafsan'}></Cousin>
                <Cousin name={'Rohana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;