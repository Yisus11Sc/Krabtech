import styles from "./About.module.css";
import React from "react";
import aboutImage from "../../assets/about.jpg";
import { useLanguage } from "../Context/LanguageContext";

export default function About() {
  const { texts } = useLanguage();

  return (
    <section id="nosotros" className={styles.about}>
      <h2 className={styles.titulo}>{texts.nosotros.title}</h2>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.desc}>{texts.nosotros.desc}</p>

            <div className={styles.misVis}>
              <div className={styles.card}>
                <h3> {texts.nosotros.mision}</h3>
                <p>{texts.nosotros.descmision}</p>
              </div>
              <div className={styles.card}>
                <h3> {texts.nosotros.vision}</h3>
                <p>{texts.nosotros.descvision}</p>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={aboutImage}
              alt="Equipo trabajando"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
