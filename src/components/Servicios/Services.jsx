import React, { useState } from "react";
import styles from "./Services.module.css";
import Modal from "./Modal/Modal";
import imagen1 from "../../assets/serv1.png";
import imagen2 from "../../assets/serv2.png";
import imagen3 from "../../assets/serv3.png";
import imagen4 from "../../assets/serv6.png";
import imagen5 from "../../assets/serv7.png";
import imagen6 from "../../assets/serv5.png";
import { useLanguage } from "../Context/LanguageContext";



export default function Services() {
  const {texts} = useLanguage();
  const images = [imagen1,imagen2,imagen3,imagen4,imagen5,imagen6];

  const services = texts.servicios.list.map((item, idx) => ({
    ...item,
    img: images[idx],
  }));

  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };
  return (
    <section id="servicios" className={styles.container}>
      <h2 className={styles.title}>{texts.servicios.title}</h2>
      <div className={styles.grid}>
        {services.map((service, idx) => (
          <div className={styles.card} key={idx} onClick={() => handleOpen(service)}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
      <Modal service={selectedService} onClose={handleClose} />
    </section>
  );
}