export const Buttons = ({ src, name, handleClick, goTo }) => {
  return (
    <div className="icon">
      <button onClick={() => handleClick()}>
        <img src={src} alt={name} />
      </button>
    </div>
  )
}
