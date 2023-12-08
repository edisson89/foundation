import { useState, useEffect } from "react";
import styles from "./home.module.css";
import portada3 from "../assets/Portada/Portada (1).jpg";
import portada2 from "../assets/Portada/portada2.jpg";
import portada1 from "../assets/Portada/portada3.jpg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [portada1, portada2, portada3];
  const totalSlides = slides?.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Cambiar el valor para ajustar la velocidad de cambio (en milisegundos)

    return () => clearInterval(intervalId);
  }, [currentIndex, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  };
  if (!Array.isArray(slides) || totalSlides === 0) return;
  return (
    <div className={styles.portadaContainer}>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={
                index === currentIndex
                  ? `${styles.slider}
                ${styles.active}`
                  : `${styles.slider}`
              }
            >
              {currentIndex === index && (
                <img src={slide} alt={`imagen-${index}`} />
              )}
            </div>
          ))}
        </div>
        <button  onClick={prevSlide} className={styles.prevButton}>
          &lt;
        </button>
        <button  onClick={nextSlide} className={styles.nextButton}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;
