

const ReusebleForm = ({formTitle,handleSubmit,submitBtnText='Submit'}) => {
    const handleLocalSubmit = e=>{
        e.preventDefault()
        const data = {
            name:e.target.name.value,
            email:e.target.email.value,
            phone:e.target.phone.value
        }
        handleSubmit(data)
    }

    return (
        <div>
            <h1>{formTitle}</h1>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br /> <br />
                <input type="email" name="email" />
                <br /> <br />
                <input type="phone" name="phone" />
                <br />
                <input type="Submit" value={submitBtnText} />

            </form>
        </div>
    );
};

export default ReusebleForm;