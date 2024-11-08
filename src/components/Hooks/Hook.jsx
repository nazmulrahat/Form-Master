import useInputState from "./Hook";



const Hook = () => {
    const [name , handleNameChange] = useInputState('rat')
    const handleSubmit = e =>{
        e.preventDefault()
        console.log('from data', name);
    }
    return (
        <div>
              <form onSubmit={ handleSubmit }>
                <input value={name } onChange={handleNameChange} type="text" name="name" />
                <br /> <br />
                <input type="email" name="email" />
                <br /> <br />
                <input type="phone" name="phone" />
<br />
<input type="Submit" />

            </form>
        </div>
    );
};

export default Hook;