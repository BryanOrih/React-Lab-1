import React, {useState} from 'react';
import './App.css';
import HelloWorld from './components/helloWorld';
import Labels from './components/labels';

let colorArray = [
  "blue",
  "red",
  "black",
  "green",
  "orange",
  "white"
]

function App() {


  let [backGroundColor, setBackgroundColor] = useState('blue')
  const ColorChanger = () =>{
    let randomNum = Math.floor(Math.random()* colorArray.length)
    setBackgroundColor(colorArray[randomNum])
  }

  return (
    <div className="App" style ={{ backgroundColor: backGroundColor }}>
      <HelloWorld />
      <button onClick={ColorChanger}>change Background Color</button>
      <form>
        <Labels/>
        <input></input>
        <input></input>
        <input></input>
        <input type='submit'></input>
      </form>
    </div>
  );
}

export default App;
