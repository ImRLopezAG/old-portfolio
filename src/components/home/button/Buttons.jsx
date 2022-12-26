export const Buttons = ({ src, name }) => {
  return (
    <div className="icon">
      <button>
        <img src={src} alt={name} />
      </button>
    </div>
  )
}
