import { useState } from 'react';
import './App.css';

import Board from './components/Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const turn = currentMove % 2 === 0
  const currentBoard = history[currentMove];


  const handlePlay = (squares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), squares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }


  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  console.log(history)

  return (
    <main>
      <Board turn={turn} squares={currentBoard} onPlay={handlePlay} />
      <section className='game-info'>
        <ol>
          {moves}
        </ol>
      </section>

    </main>
  );
}

