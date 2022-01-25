//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Panier from './components/Panier';
import DrinkList from './components/DrinkList';
import Form from './components/Form';
import Compteur from "./components/Compteur"

function App() {
  return (
    <div>
      <Header />
      <Panier />
      <DrinkList />
      <Form />
      <Compteur />
    </div>
  );
}

export default App;