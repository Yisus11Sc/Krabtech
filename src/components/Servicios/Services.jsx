import React from "react";
import styles from "./Services.module.css";
import imagen1 from "../../assets/serv1.png";
import imagen2 from "../../assets/serv2.png";
import imagen3 from "../../assets/serv3.png";
import imagen4 from "../../assets/serv6.png";
import imagen5 from "../../assets/serv7.png";
import imagen6 from "../../assets/serv5.png";

const services = [
  {
    title: "Mantenimiento de PCs y Laptops",
    desc: "Limpieza profunda de tu equipo por dentro y por fuera para prevenir fallas y prolongar su vida útil.",
    img: imagen1,
  },
  {
    title: "Formateo y Optimizacion del Sistema",
    desc: "Instalamos el sistema desde cero y lo dejamos rápido, limpio y listo para trabajar o jugar.",
    img: imagen2,
  },
  {
    title: "Instalacion de Software y Drivers",
    desc: "Configuramos todos tus programas esenciales y drivers para que tu PC funcione al 100%.",
    img: imagen3,
  },
  {
    title: "Ensamblaje de Equipos",
    desc: "Mejoramos o armamos tu computadora con los componentes ideales para tus necesidades.",
    img: imagen4,
  },
  {
    title: "Actualizaciones de Sistema",
    desc: "Instalamos los sitemas operativos mas actuales y modernos",
    img: imagen5,
  },
  {
    title: "Instalacion y Configuracion de Camaras",
    desc: "Colocamos y configuramos sistemas de vigilancia para que puedas monitorear tu hogar o negocio desde cualquier lugar.",
    img: imagen6,
  },
];

export default function Services() {
  return (
    <section id="servicios" className={styles.container}>
      <h2 className={styles.title}>Nuestros Servicios</h2>
      <div className={styles.grid}>
        {services.map((service, idx) => (
          <div className={styles.card} key={idx}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}