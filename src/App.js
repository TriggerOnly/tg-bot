import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

function App() {
  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Button onClick={onToggleButton}>pfr</Button>
    </div>
  );
}

export default App;
