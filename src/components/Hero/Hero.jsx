import styles from "./Hero.module.css";
import img from '../../assets/pcgamer2.png'
import React from "react";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
        <div className={styles.left}>
          <h2 className={styles.titulo}>Soluciones<br/>tecnologicas<br/>para tu PC</h2>
          <p className={styles.subtitulo}>
            Reparaciones, limpieza y mantenimiento profesional en Cancun.
          </p>
          <div className={styles.botonera}>
          <button className={styles.btn1}>Get Started</button>
          <button className={styles.btn2}>Support Chat</button>
          </div>
        </div>
        <div className={styles.right}>
            <img src={img} alt="pc-gamer" />
        </div>
    </section>
  );
}
