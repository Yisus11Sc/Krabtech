import styles from './Paquetes.module.css'
import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa';

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
  Medio:  [true, true, true, true, true, true, false, true, true, false],
  Premium:[true, true, true, true, true, true, true, true, true, true],
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
                <td>{paquetes.Básico[idx] ? <FaCheck className={styles.check} /> : <FaTimes className={styles.times}/>}</td>
                <td>{paquetes.Medio[idx] ? <FaCheck className={styles.check} /> : <FaTimes className={styles.times} />}</td>
                <td>{paquetes.Premium[idx] ? <FaCheck className={styles.check} /> : <FaTimes className={styles.times} />}</td>
              </tr>
            ))}
            <tr className={styles.pricesRow}>
              <td></td>
              <td>{precios.Básico}</td>
              <td>{precios.Medio}</td>
              <td>{precios.Premium}</td>
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
                <li key={i} className={flags[i] ? styles.benefit : styles.benefitOff}>
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
