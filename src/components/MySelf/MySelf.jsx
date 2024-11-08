import Special from "../Special/Special";

const MySelf = ({asset}) => {
  
    return (
        <div>
            <h1>MySelf</h1>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;