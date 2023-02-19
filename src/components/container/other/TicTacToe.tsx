import confetti from 'canvas-confetti'
import { useState } from 'react'
import { checkEndGame, checkWinnerFrom } from './TicTacToe/board'
import { TURNS } from './TicTacToe/constants'
import { resetGameStorage, saveGameToStorage } from './TicTacToe/data'
import { Square } from './TicTacToe/Square'
import { WinnerModal } from './TicTacToe/WinnerModal'
import './TicTacToe/index.css'

export const TicTacToe = (): JSX.Element => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  interface Winner {
    winner: string | false | null
  }

  const [winner, setWinner] = useState<Winner['winner']>(null)

  const resetGame = (): void => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index: number): void => {
    if (Boolean(board[index]) || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner != null) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {board.map((square: number, index: number) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              isSelected={false}
            >
              {square}
            </Square>
          )
        })}
      </section>

      <section className='turn'>
        <Square
          isSelected={turn === TURNS.X}
          updateBoard={function (index: number): void {
            throw new Error('Function not implemented.')
          }}
          index={0}
        >
          {TURNS.X}
        </Square>
        <Square
          isSelected={turn === TURNS.O}
          updateBoard={function (index: number): void {
            throw new Error('Function not implemented.')
          }}
          index={0}
        >
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}
