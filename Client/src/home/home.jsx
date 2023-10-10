import styles from './home.module.css'
import portada from '../assets/Portada/Portada (1).jpg'


const Home = () => {
  return (
    <div>
        <div className={styles.portadaContainer}>
            <img className={styles.portadaImagen} src={portada}/>
        </div>
        <section className={styles.blog}>
            <p>XD</p>
        </section>
    </div>
  )
}

export default Home