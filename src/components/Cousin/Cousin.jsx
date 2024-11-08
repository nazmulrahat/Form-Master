import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousin = ({name,asset}) => {
    return (
        <div>
            <h1>Cousin</h1>
            <p>{name}</p>
            <section>
      {
         asset&& <Special asset={asset}></Special>
         

      }
      {
        name==='Rabiea'&& <Friend></Friend>
      }
            </section>
        </div>
    );
};

export default Cousin;