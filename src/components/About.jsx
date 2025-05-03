import styles from "./About.module.css";
import React from "react";
import aboutImage from '../assets/about.jpg'

export default function About() {
  return (
    <section id="nosotros" className={styles.about}>
      <h2 className={styles.titulo}>¿Quiénes somos?</h2>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.desc}>
              En <strong>Krabtech</strong> somos apasionados por la tecnología y el servicio al cliente.
              Nos dedicamos a ofrecer las mejores soluciones de mantenimiento, reparación y optimización de PC en Cancún.
              Nuestro equipo está compuesto por profesionales jóvenes, capacitados y con un enfoque 100% en calidad, honestidad y rapidez.
            </p>

            <div className={styles.misVis}>
              <div className={styles.card}>
                <h3>Misión</h3>
                <p>
                  Proporcionar servicios de tecnología accesibles, rápidos y confiables, 
                  mejorando la experiencia digital de nuestros clientes.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Visión</h3>
                <p>
                  Ser la empresa líder en soluciones de PC en el sureste mexicano, reconocidos por nuestro compromiso, innovación y pasión.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={aboutImage} alt="Equipo trabajando" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
