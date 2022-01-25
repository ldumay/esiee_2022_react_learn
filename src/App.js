import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Panier from './components/Panier';
import DrinkList from './components/DrinkList';

function App() {
  return (
    <div>
      <Header />
      <Panier />
      <DrinkList />
    </div>
  );
}

export default App;