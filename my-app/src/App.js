import React, {useState} from 'react';
import './App.css';
import HelloWorld from './components/helloWorld';
import ContactForm from './components/contactForm';
import Buttons from './components/Buttons';
import TextInput from './components/TextInput';
import ItemList from './components/ItemList';

function App() {

  return (
    <div className="App">
      <HelloWorld />
      <Buttons />
      <ContactForm/>
      <TextInput/>
      <ItemList/>
    </div>
  );
}

export default App;
