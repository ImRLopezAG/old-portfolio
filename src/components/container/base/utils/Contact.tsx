interface ContactProps {
  link: string
  icon: string
  name: string
}

export const Contact = ({ link, icon, name }: ContactProps) => {
  return (
    <a
      className="social-item text-blue-500"
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      <i className={icon}></i>
    </a>
  )
}
