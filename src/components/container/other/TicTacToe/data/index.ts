interface GameData {
  board: number[][]
  turn: string
}

export const saveGameToStorage = ({ board, turn }: GameData): void => {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = (): void => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
