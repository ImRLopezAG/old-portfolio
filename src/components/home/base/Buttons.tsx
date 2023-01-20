interface ButtonsProps {
  src: string
  name: string
  handleClick: () => void
  goTo?: string
}

export const Buttons = ({ src, name, handleClick, goTo }: ButtonsProps) => {
  return (
    <div className="icon">
      <button onClick={() => handleClick()}>
        <img src={src} alt={name} />
      </button>
    </div>
  )
}
