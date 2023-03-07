interface ButtonsProps {
  src: string
  name: string
  handleClick: () => void
  goTo?: string
}

interface Props {
  BProps: ButtonsProps
}

export const Buttons: React.FC<Props> = ({ BProps }) => {
  return (
    <div className='icon'>
      <button onClick={() => BProps.handleClick()}>
        <img src={BProps.src} alt={BProps.name} />
      </button>
    </div>
  )
}
