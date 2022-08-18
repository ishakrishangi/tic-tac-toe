import React, {useState} from 'react';
import './App.css';
import Square from './Square';

function App() {
  const [squares, setSquares] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState(true);
  // const propVariable = 'This is a prop'

  return (
    <div className="App">
      <Square 
      // propsVar={propVariable}
      squares={squares}
      setSquares={setSquares}
      player={player}
      setPlayer={setPlayer}

      />
    </div>
  );
}

export default App;
