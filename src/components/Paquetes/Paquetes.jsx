import styles from "./Paquetes.module.css";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const beneficios = [
  "Limpieza interna y externa",
  "Cambio de pasta térmica",
  "Optimización de software",
  "Revisión de temperaturas",
  "Eliminación de polvo",
  "Chequeo de hardware",
  "Reporte detallado",
  "Actualización de drivers",
  "Mantenimiento preventivo",
  "Soporte post-servicio",
];

const paquetes = {
  Básico: [true, true, false, true, true, false, false, false, true, false],
  Medio: [true, true, true, true, true, true, false, true, true, false],
  Premium: [true, true, true, true, true, true, true, true, true, true],
};

const precios = {
  Básico: "$499 MXN",
  Medio: "$699 MXN",
  Premium: "$899 MXN",
};

export default function Paquetes() {
  return (
    <section id="paquetes" className={styles.section}>
      <h2 className={styles.title}>Nuestros Paquetes</h2>

      {/* Vista escritorio */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Básico</th>
              <th>Medio</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            {beneficios.map((item, idx) => (
              <tr key={idx}>
                <td>{item}</td>
                <td>
                  {paquetes.Básico[idx] ? (
                    <FaCheck className={styles.check} />
                  ) : (
                    <FaTimes className={styles.times} />
                  )}
                </td>
                <td>
                  {paquetes.Medio[idx] ? (
                    <FaCheck className={styles.check} />
                  ) : (
                    <FaTimes className={styles.times} />
                  )}
                </td>
                <td>
                  {paquetes.Premium[idx] ? (
                    <FaCheck className={styles.check} />
                  ) : (
                    <FaTimes className={styles.times} />
                  )}
                </td>
              </tr>
            ))}
            <tr className={styles.pricesRow}>
              <td></td>
              <td>
                <a
                  href="https://wa.me/5219983785158?text=%F0%9F%93%B1%F0%9F%92%BB%20%C2%A1Hola%20Krabtech!%0AEstoy%20interesado%20en%20el%20Paquete%20B%C3%A1sico%20%F0%9F%A7%BC%F0%9F%94%A7%20para%20darle%20mantenimiento%20a%20mi%20PC.%0A%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20y%20c%C3%B3mo%20agendar%3F%20%F0%9F%99%8C%0A%C2%A1Gracias!%20%F0%9F%98%8A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {precios.Básico}
                </a>
              </td>
              <td>
                <a
                  href="https://wa.me/5219983785158?text=%F0%9F%93%B1%F0%9F%92%BB%20%C2%A1Hola%20Krabtech!%0AEstoy%20interesado%20en%20el%20Paquete%20Medio%F0%9F%A7%BC%F0%9F%94%A7%20para%20darle%20mantenimiento%20a%20mi%20PC.%0A%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20y%20c%C3%B3mo%20agendar%3F%20%F0%9F%99%8C%0A%C2%A1Gracias!%20%F0%9F%98%8A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {precios.Medio}
                </a>
              </td>
              <td>
                <a
                  href="https://wa.me/5219983785158?text=%F0%9F%93%B1%F0%9F%92%BB%20%C2%A1Hola%20Krabtech!%0AEstoy%20interesado%20en%20el%20Paquete%20Premium%F0%9F%A7%BC%F0%9F%94%A7%20para%20darle%20mantenimiento%20a%20mi%20PC.%0A%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20y%20c%C3%B3mo%20agendar%3F%20%F0%9F%99%8C%0A%C2%A1Gracias!%20%F0%9F%98%8A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {precios.Premium}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Vista móvil */}
      <div className={styles.cardsWrapper}>
        {Object.entries(paquetes).map(([nombre, flags], idx) => (
          <div key={idx} className={styles.card}>
            <h3>{nombre}</h3>
            <p className={styles.price}>{precios[nombre]}</p>
            <ul>
              {beneficios.map((b, i) => (
                <li
                  key={i}
                  className={flags[i] ? styles.benefit : styles.benefitOff}
                >
                  {flags[i] ? <FaCheck /> : <FaTimes />} {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
