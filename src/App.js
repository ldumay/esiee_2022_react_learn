//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Panier from './components/Panier';
import DrinkList from './components/DrinkList';
import Form from './components/Form';
import Compteur from "./components/Compteur"
import { useState } from 'react';
import Selection from './components/Selection';

function App() {
  const [selection, updateSel] = useState()

  return (
    <div>
      <Header />
      <Panier />
      <DrinkList selection={selection} updateSel={updateSel}/>
      <Selection selection={selection} updateSel={updateSel}/>
      <Form />
      <Compteur />
    </div>
  );
}

export default App;