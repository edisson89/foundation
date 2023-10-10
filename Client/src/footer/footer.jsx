import React from 'react';
import image from '../assets/Entre Cuerdas logo.png'
import styles from './footer.module.css'

import instagram from '../assets/Contactos/Instagram_logo_2016.svg.webp'
import facebook from '../assets/Contactos/Facebook_icon_2013.svg.png'
import whatsapp from '../assets/Contactos/WhatsApp_logo-color-vertical.svg.png'

const Footer = () => {
    return (
        <div id="finalFooter" className={styles.containerBox}>
            <img className={styles.xd} src={image} alt="image"/>
            <p className={styles.textBox}>Visita nuestras redes sociales para estar al tanto de las noticias más importantes:</p>
            <div className={styles.contactList}>
                <a target="_blank" href="https://www.instagram.com/p/CAwDkLsJNZv/"><img src={instagram} alt="image"/></a>
                <a target="_blank" href="https://www.instagram.com/p/CAwDkLsJNZv/"><img src={facebook} alt="image"/></a>
                <a target="_blank" href="https://www.instagram.com/p/CAwDkLsJNZv/"><img src={whatsapp} alt="image"/></a>
            </div>
        </div>
    );
}

export default Footer;