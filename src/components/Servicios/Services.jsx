import React, { useState } from "react";
import styles from "./Services.module.css";
import imagen1 from "../../assets/serv1.png";
import imagen2 from "../../assets/serv2.png";
import imagen3 from "../../assets/serv3.png";
import imagen4 from "../../assets/serv6.png";
import imagen5 from "../../assets/serv7.png";
import imagen6 from "../../assets/serv5.png";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Mantenimiento de PCs y Laptops",
    desc: "Limpieza profunda de tu equipo por dentro y por fuera para prevenir fallas y prolongar su vida útil.",
    detalles: "Incluye limpieza interna de ventiladores, pasta térmica nueva, limpieza exterior y prueba de temperatura post-servicio.",
    img: imagen1,
  },
  {
    id: 2,
    title: "Formateo y Optimizacion del Sistema",
    desc: "Instalamos el sistema desde cero y lo dejamos rápido, limpio y listo para trabajar o jugar.",
    detalles: "Incluye limpieza interna de ventiladores, pasta térmica nueva, limpieza exterior y prueba de temperatura post-servicio.",
    img: imagen2,
  },
  {
    id: 3,
    title: "Instalacion de Software y Drivers",
    desc: "Configuramos todos tus programas esenciales y drivers para que tu PC funcione al 100%.",
    detalles: "Incluye limpieza interna de ventiladores, pasta térmica nueva, limpieza exterior y prueba de temperatura post-servicio.",
    img: imagen3,
  },
  {
    id: 4,
    title: "Ensamblaje de Equipos",
    desc: "Mejoramos o armamos tu computadora con los componentes ideales para tus necesidades.",
    detalles: "Incluye limpieza interna de ventiladores, pasta térmica nueva, limpieza exterior y prueba de temperatura post-servicio.",
    img: imagen4,
  },
  {
    id: 5,
    title: "Actualizaciones de Sistema",
    desc: "Instalamos los sitemas operativos mas actuales y modernos",
    detalles: "Incluye limpieza interna de ventiladores, pasta térmica nueva, limpieza exterior y prueba de temperatura post-servicio.",
    img: imagen5,
  },
  {
    id: 6,
    title: "Instalacion y Configuracion de Camaras",
    desc: "Colocamos y configuramos sistemas de vigilancia para que puedas monitorear tu hogar o negocio desde cualquier lugar.",
    detalles: "Incluye limpieza interna de ventiladores, pasta térmica nueva, limpieza exterior y prueba de temperatura post-servicio.",
    img: imagen6,
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="servicios" className={styles.container}>
      <h2 className={styles.title}>Nuestros Servicios</h2>
      <div className={styles.grid}>
        {services.map((service) => (
          <motion.div
            layoutId={`card-${service.id}`}
            className={styles.card}
            key={service.id}
            onClick={() => setSelected(service)}
          >
            <motion.img
              src={service.img}
              alt={service.title}
              layoutId={`img-${service.id}`}
            />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className={styles.modalOverlay}
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón X para cerrar */}
              <button
                className={styles.closeButton}
                onClick={() => setSelected(null)}
                aria-label="Cerrar modal"
              >
                &times;
              </button>

              <motion.img
                src={selected.img}
                alt={selected.title}
                layoutId={`img-${selected.id}`}
              />
              <h3>{selected.title}</h3>
              <p>{selected.detalles}</p>
              <button
                className={`${styles.btn} ${styles.primary}`}
                onClick={() => {
                  const telefono = "5219983785158"; // <-- CAMBIA ESTO por tu número real
                  const mensaje = `¡Hola! Estoy interesado en el servicio de *${selected.title}*. ¿Podrían darme más información?`;
                  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(
                    mensaje
                  )}`;
                  window.open(url, "_blank");
                }}
              >
                Solicitar servicio
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
