import { useState } from "react";


const StatefulForm = () => {

    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null)
    const [phone,setPhone] = useState(null)
    const [error,setError]= useState('')
    const  handleSubmit = e =>{
        e.preventDefault()
        if(phone.length <5){
            setError('need more numbers')
        }
        else{
            setError('')
        }
      console.log(name,email,phone);
    }
    const handleNameChange = e =>{
        console.log(e.target.value);
        setName(e.target.value)
    }
    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePhoneChange = e =>{
        console.log(e.target.value);
        setPhone(e.target.value)
    }

    return (
        <div>
           
            <form onSubmit={ handleSubmit }>
                <input onChange={handleNameChange} required type="text" name="name" />
                <br /> <br />
                <input onChange={ handleEmailChange} type="email" name="email" />
                <br /> <br />
                <input onChange={handlePhoneChange} type="phone" name="phone" />
<br />
<br />
<input type="Submit" />
{
    error && <p>{error}</p>
}

            </form>
        </div>
    );
};

export default StatefulForm;