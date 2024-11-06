

const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault()
      
        console.log(  e.target.name.value);
    }
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="text" name="name" />
                <br /> <br />
                <input type="email" name="email" />
<br />
<input type="Submit" />

            </form>
        </div>
    );
};

export default SimpleForm;