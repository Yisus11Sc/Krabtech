import styles from "./Hero.module.css";
import img from "../../assets/pcgamer2.png";
import React from "react";
import { useLanguage } from "../Context/LanguageContext";

export default function Hero() {
  const { texts } = useLanguage();

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.left}>
        <h2 className={styles.titulo}>{texts.inicio.title}</h2>
        <p className={styles.subtitulo}>{texts.inicio.subtitle}</p>
        <div className={styles.botonera}>
          <button
            onClick={() => {
              const section = document.getElementById("paquetes");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className={styles.btn1}
          >
            {texts.inicio.btn1}
          </button>
          <button
            onClick={() => window.open("https://wa.me/5219983785158", "_blank")}
            className={styles.btn2}
          >
            {texts.inicio.btn2}
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <img src={img} alt="pc-gamer" />
      </div>
    </section>
  );
}
