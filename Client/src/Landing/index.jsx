import { NavLink } from "react-router-dom";
import styles from "./landing.module.css";
import PropTypes from 'prop-types'

const Landing = ({connected}) => {
  return (
    <div className={styles.landing}>
      <h1>Bienvenidos </h1>
      <h2>Escuela Filarmonica entre Cuerdas</h2>
      <NavLink to={'/home'}>
        <button>Navegar  a Inicio</button>
      </NavLink>
      <div>
        <h4>{connected}</h4>
      </div>
    </div>
  );
};

Landing.propTypes = {
  connected : PropTypes.bool
}
export default Landing;
