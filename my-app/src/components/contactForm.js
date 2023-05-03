import React, { useState } from 'react'
import "../App.css"

const ContactForm = () => {

    let [input, setInput] = useState({
        name: "",
        email: "",
        message: ""
    })
    let valueChange = (e) =>{
        setInput({ 
            ...input,
            [e.target.name]: e.target.value
        })
    }
    let [signUpInfo, setSignUpInfo] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(Object.values(input).indexOf('') > -1) return;
        setSignUpInfo([...signUpInfo, input])
        setInput({
            name: "",
            email: "",
            message: ""
        })
    }
    const DataList = ({name, email, message}) =>{
        return(
            <ul>
                <li>name: {name}</li>
                <li>email: {email}</li>
                <li>message: {message}</li>
            </ul>
        )
    }
    return (
    <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='name'>name</label>
            <input name="name" value = {input.name} onChange={(e) => valueChange(e)}></input>
            <label htmlFor='email'>email</label>
            <input name="email" value = {input.email} onChange={(e) => valueChange(e)}></input>
            <label htmlFor='message'>message</label>
            <input name="message" value = {input.message} onChange={(e) => valueChange(e)}></input>
            <input type='submit'></input>
        </form>
        {signUpInfo.map((info, index) => (
          <DataList key={info + index} name={info.name} email={info.email} message={info.message}/>
        ))}
    </>
  )
}

export default ContactForm