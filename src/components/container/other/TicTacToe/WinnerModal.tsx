import { Square } from './Square.jsx'

interface WinnerModalProps {
  winner: string | false | null
  resetGame: () => void
}

export function WinnerModal ({ winner, resetGame }: WinnerModalProps): JSX.Element | null {
  if (winner === null) return null

  const winnerText = winner === false ? 'Draw 😱' : `${winner} wins`

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {winner && (
            <Square
              isSelected={false}
              updateBoard={() => {}}
              index={0}
            >
              {winner}
            </Square>
          )}
        </header>

        <footer>
          <button onClick={resetGame}>Reset</button>
        </footer>
      </div>
    </section>
  )
}
