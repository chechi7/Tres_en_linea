import { WINNING_COMBOS } from "./constants";
export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNING_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  export const checkEndgame = (newBoard) => {
    return newBoard.every((Square) => Square !== null);
  };
