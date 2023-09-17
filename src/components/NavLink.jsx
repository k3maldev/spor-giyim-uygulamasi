// eslint-disable-next-line react/prop-types
const NavLink = ({ href, text }) => {
  return (
    <a
      className='hover:bg-gray-700/25 px-4 py-1 rounded-lg transition-colors'
      href={href}
    >
      {text}
    </a>
  )
}

export default NavLink
