import { NavLink } from "react-router-dom"
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Escuela Filarmonica entre Cuerdas</h1>
      <h2>Fundación esperanza y resiliencia</h2>
      <NavLink to="/home">Inicio</NavLink>
      <NavLink to="/about">Nosotros</NavLink>
      <NavLink to="/programas">Programas</NavLink>
      <NavLink to="/servicios">Servicios</NavLink>
      <NavLink to="/galeria">Galeria</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/tienda">Tienda</NavLink>      
      <NavLink to="/donaciones">Donaciones</NavLink>      
      <NavLink to="/contacto">Contacto</NavLink>     

    </div>
  )
}

export default Navbar