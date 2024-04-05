import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./assets/components/Square";
import { TURNS} from "./assets/components/constants";
import { checkWinnerFrom, checkEndgame } from "./assets/components/board";
import { WinnerModal } from "./assets/components/Winner";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

 
  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner);
    } else if (checkEndgame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className='board'>
      <h1>Triqui</h1>
      <section className="game">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal reset={reset} winner={winner}/>

    
    </main>
  );
}

export default App;
