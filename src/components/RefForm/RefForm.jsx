import { useEffect, useRef } from "react";

const RefForm = () => {
    const namRaf = useRef(null)
    const emailRaf = useRef(null)
    const phoneRaf = useRef(null)
    useEffect (()=>{
        namRaf.current.focus()
    })
    const handleSubmit = e=>{
        e.preventDefault()
        console.log(namRaf.current.value,emailRaf.current.value,phoneRaf.current.value);
        console.log(emailRaf.current.value);
        console.log(phoneRaf.current.value);
    }
    return (
        <div>
              <form onSubmit={ handleSubmit }>
                <input  ref={namRaf} type="text" name="name" />
                <br /> <br />
                <input defaultValue={'@gmail.com'} ref={emailRaf} type="email" name="email" />
                <br /> <br />
                <input ref={ phoneRaf} type="phone" name="phone" />
<br />
<input type="Submit" />

            </form>
            
        </div>
    );
};

export default RefForm;