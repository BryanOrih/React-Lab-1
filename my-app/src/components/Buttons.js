import React, {useState} from 'react'
let colorArray = [
    "blue",
    "red",
    "black",
    "green",
    "orange",
    "white"
  ]
const Buttons = () => {
    
    let [backGroundColor, setBackgroundColor] = useState('blue')
    const ColorChanger = () =>{
      let randomNum = Math.floor(Math.random()* colorArray.length)
      setBackgroundColor(colorArray[randomNum])
    }

  return (
    <button onClick={ColorChanger} style ={{ backgroundColor: backGroundColor }}>change Background Color</button>
  )
}

export default Buttons