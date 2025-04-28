import styles from "./Contacto.module.css";
import img from "../assets/contact.jpg";
import React, { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    mensaje: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
    //Aqui puedes enviar los datos a un servidor o mostrar un mensaje de exito
  };

  return (
    <section id="contacto" className={styles.contacto}>
      <h1 className={styles.titulo}>Contactanos</h1>
      <p className={styles.desc}>
        ¿Alguna pregunta o cotización? Escríbenos un mensaje
      </p>
      <div className={styles.container}>
        <img src={img} alt="Contactanos" className={styles.image} />
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <p className={styles.p1}>
            Hola, mi nombre es{" "}
            <input
              type="text"
              name="nombre"
              placeholder="su nombre aqui."
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            y estoy buscando un equipo que me ayude con
            <textarea
              name="mensaje"
              placeholder="breve descripcion del proyecto..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </p>
          <hr />
          <p className={styles.p2}>
            Puedes responderme a{" "}
            <input
              type="email"
              placeholder="su correo aqui."
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </p>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
