import React, { useState } from 'react';
import Board from './Board';

import { createStyles } from 'antd-style';

type GameProps = {
  [param: string]: string;
};

const useStyles = createStyles(({ token, css }) => ({
  game: {
    display: 'flex',
    flexDirection: 'row',
  },
  gameBoard: {
    backgroundColor: token.green3,
    paddingTop: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
  },
  gameInfo: {
    marginLeft: '10px',
    paddingRight: '30px',
    backgroundColor: token.yellow5,
  },
}));

const Game: React.FC = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const { styles } = useStyles();

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Start';
    }
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.gameInfo}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
