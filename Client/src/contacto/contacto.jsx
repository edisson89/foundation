import contacto from "../assets/Portada/contactanosPiano.jpg";
import styles from './contacto.module.css'

const Contacto = () => {
  return (
    <div className={styles.contacto}>
      <img src={contacto} alt="contacto" />
    </div>
  )
}

export default Contacto