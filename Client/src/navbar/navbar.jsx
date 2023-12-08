import { NavLink } from "react-router-dom"
import styles from './navbar.module.css'
import logo from '../assets/Entre Cuerdas logo.png';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.imageBackground}>
        <NavLink to="/home"><img className={styles.logo} src={logo}/></NavLink>
      </div>
      <div className={styles.navigationContainer}>
        <NavLink className={styles.navigationList} to="/about"><button>Nosotros</button></NavLink>
        <NavLink className={styles.navigationList} to="/programas"><button>Programas</button></NavLink>
        <NavLink className={styles.navigationList} to="/galeria"><button>Galería</button></NavLink>
        <NavLink className={styles.navigationList} to="/blog"><button>Blog</button></NavLink>
        <NavLink className={styles.navigationList} to="/tienda"><button>Tienda</button></NavLink>
        <NavLink className={styles.navigationList} to="/contacto"><button>Contacto y donaciones</button></NavLink>    
      </div>   
    </div>
  )
}

export default Navbar