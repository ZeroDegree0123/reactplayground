import { useState } from 'react';

import './App.css';
import Square from './components/Square';


export default function Board() {
  const [turn, setTurn] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null));
  //State 
  // values, turn, win condition, boxes

  const handleClick = (index) => {
    const nextSquares = squares.slice();
    if (nextSquares[index] || calculateWinner(squares)) return;
    if (turn) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    };
    setSquares(nextSquares);
    setTurn(!turn);
  }

  const calculateWinner = (square) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) return square[a];
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner" + winner;
  } else {
    status = "Next player: " + (turn ? "X" : "O");
  }

  return (
    <main>
      <h1>Tic-Tac-Toe</h1>
      <section className='board'>
        <div>{status}</div>
        <div className='board-row'>
          <Square value={squares[0]} handleClick={() => handleClick(0)} />
          <Square value={squares[1]} handleClick={() => handleClick(1)} />
          <Square value={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className='board-row'>
          <Square value={squares[3]} handleClick={() => handleClick(3)} />
          <Square value={squares[4]} handleClick={() => handleClick(4)} />
          <Square value={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className='board-row'>
          <Square value={squares[6]} handleClick={() => handleClick(6)} />
          <Square value={squares[7]} handleClick={() => handleClick(7)} />
          <Square value={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </section>
    </main>
  );
}

