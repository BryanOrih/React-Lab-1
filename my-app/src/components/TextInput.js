import React, { useState } from 'react'

const TextInput = () => {
    let [inputData, setinputData] = useState([])
    let [inputValue, setInputValue] = useState("")
    const handleInput = (e)=>{
        setInputValue(e.target.value)
    }
    let handleButton = () =>{
        console.log("limga");
        setinputData([...inputData, inputValue])
        setInputValue("")
    }
    const InputContainer = ({value}) =>{
        return(
        <p>{value}</p>
        )
    }
    
  return (
    <div>
        <input value={inputValue} onChange={(e)=>handleInput(e)}></input>
        <input type='submit' onClick={handleButton}/>
        {inputData.map((info, index) => (
          <InputContainer value={info} key={info+index}/>
        ))}
    </div>
  )
}

export default TextInput