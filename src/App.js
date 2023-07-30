import './App.css';
// import logo from './img/';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [nbClicks, setNbClicks] = useState(0);

  const driveClick = () => {
    setNbClicks(nbClicks + 1);
  };

  const resetCounter = () => {
    setNbClicks(0);
  };

  return (
    <div className="App">
      <div className='container-main'>
        <Counter nbClicks={nbClicks}/>
        <Button
          text="Click"
          isButtonClick={true}
          driveClick={driveClick}/>
        <Button
          text="Reset"
          isButtonClick={false}
          driveClick={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
