import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import Button from './components/Button/Button';

function App() {
  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])  

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      <Button onClick={onToggleButton}></Button>
    </div>
  );
}

export default App;
