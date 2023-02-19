import { WINNER_COMBOS } from './constants.js'

export const checkWinnerFrom = (boardToCheck: string[]): string | null => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard: string[]): boolean => {
  return newBoard.every((square: string) => square !== null)
}
