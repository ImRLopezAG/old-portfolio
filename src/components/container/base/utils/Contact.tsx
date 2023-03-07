interface ContactProps {
  link: string
  icon: string
}

interface Props {
  Contact: ContactProps
}

export const Contact: React.FC<Props> = ({ Contact }) => {
  return (
    <a
      className='social-item text-blue-500'
      href={Contact.link}
      rel='noreferrer'
      target='_blank'
    >
      <i className={Contact.icon} />
    </a>
  )
}
