import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square"

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  // const propVariable = 'This is a prop'

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }

  const calculateWinner = (array) => {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i]
      if (array[a] && array[a]===array[b] && array[a]===array[c]){
        return `${array[a]} won!`
      }
    } return "Who will win?"
  }



  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={value}
              index={index}
              key = {index}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
