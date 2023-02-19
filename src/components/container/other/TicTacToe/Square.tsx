interface SquareProps {
  children: React.ReactNode
  isSelected: boolean
  updateBoard: (index: number) => void
  index: number
}

export const Square = ({ children, isSelected, updateBoard, index }: SquareProps): JSX.Element => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = (): void => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
