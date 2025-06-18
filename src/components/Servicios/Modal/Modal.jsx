import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <img src={service.img} alt={service.title} />
        <h2>{service.title}</h2>
        <p>{service.desc}</p>
      </div>
    </div>
  );
}