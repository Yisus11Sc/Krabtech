import styles from "./Contacto.module.css";
import img from "../../assets/contact.jpg";
import React, { useState } from "react";
import { useLanguage } from "../Language/Context/LanguageContext";

export default function Contacto() {
  const {texts} = useLanguage();
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
      <h1 className={styles.titulo}>{texts.contacto.title}</h1>
      <p className={styles.desc}>
        {texts.contacto.desc}
      </p>
      <div className={styles.container}>
        <img src={img} alt="Contactanos" className={styles.image} />
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <p className={styles.p1}>
            {texts.contacto.form1}{" "}
            <input
              type="text"
              name="nombre"
              placeholder={texts.contacto.form2}
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            {texts.contacto.form3}
            <textarea
              name="mensaje"
              placeholder={texts.contacto.form4}
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </p>
          <hr />
          <p className={styles.p2}>
            {texts.contacto.form5}{" "}
            <input
              type="email"
              placeholder={texts.contacto.form6}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </p>
          <button type="submit">{texts.contacto.btn}</button>
        </form>
      </div>
    </section>
  );
}
