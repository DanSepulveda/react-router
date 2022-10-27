import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="contenedor">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>desarrollado por Juanito</footer>
    </div>
  )
}

export default Layout
