import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

type Value = 'X' | 'O' | undefined;

const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function App() {
  const [turn, setTurn] = useState<Value>('X');
  const [boardState, setBoardState] = useState<Record<number, Value>>({});
  const [winner, setWinner] = useState<Value>(undefined);

  const handleClickBlock = (x: number) => () => {
    setBoardState((oldState) => {
      if (!oldState[x]) {
        setTurn((oldTurn) => (oldTurn === 'X' ? 'O' : 'X'));
        return { ...oldState, [x]: turn };
      }
      return oldState;
    });
  };

  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <div className="board">
        {Array(9)
          .fill(null)
          .map((el, idx) => {
            return (
              <Block value={boardState[idx]} onClick={handleClickBlock(idx)} />
            );
          })}
      </div>
    </div>
  );
}

interface BlockProps {
  value: Value;
  onClick: () => void;
}

const Block = (props: BlockProps) => {
  return (
    <div className="block" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default App;
