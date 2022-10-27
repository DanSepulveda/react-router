import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/perfil">Perfil</NavLink>
    </nav>
  )
}

export default Navbar
