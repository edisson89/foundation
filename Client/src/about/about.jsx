import styles from './about.module.css'
import image from '../assets/Portada/Portada (3).jpg'

const About = () => {
  return (
    <div className={styles.about}>
      <img className={styles.image} src={image} alt="image"/>
      <h1 className={styles.contactTitle}>Quienes somos?</h1>
      <p className={styles.paragraph}>
        Somos una organización que nace en el 2012 con la firme convicción del poder trasformador e inspirador del arte… El arte salva, cambia, motiva, hace de lo imposible algo real, es por eso que hemos trabajado para llegar a  más de 10.000 personas de todas las localidades de Bogotá. Esto se ha realizado mediante  cuatro líneas importantes de acción. 
        La creación de espacios  donde todas las personas pueden aprender y participar de procesos de creación artística en diferentes instrumentos especialmente de tradición sinfónica mediante una metodología propia que da la oportunidad de aprendizaje a todas las personas sin importar su nivel musical. La diversificación, apropiación  y circulación de los shows filarmónicos teniendo los diversos campos artísticos de manera transversal en nuestros formatos. Y por último la creación de diferentes agrupaciones y orquestas con músicos empíricos.
        De esta manera también hemos podido realizar toda una red de fortalecimiento en la creación artística apoyando diferentes iniciativas y proyectos culturales desde nuestro que hacer.
      </p>
    </div>
  )
}

export default About