import React from 'react'
import styles from './Services.module.css'
import imagen1 from '../assets/snorlazz.jpg'
import imagen2 from '../assets/bulbasaur.jpg'
import imagen3 from '../assets/gengar.jpg'
import imagen4 from '../assets/mew.jpg'
import imagen5 from '../assets/squirtle.jpg'

const services = [
    {
        title:'Servicio 1',
        desc: 'ipsum dolor sit amet consectetur adipisicing elit.',
        img: imagen1,
    },
    {
        title:'Servicio 2',
        desc: 'ipsum dolor sit amet consectetur adipisicing elit.',
        img: imagen2,
    },
    {
        title:'Servicio 3',
        desc: 'ipsum dolor sit amet consectetur adipisicing elit.',
        img: imagen3,
    },
    {
        title:'Servicio 4',
        desc:'ipsum dolor sit amet consectetur adipisicing elit.',
        img: imagen4,
    },
    {
        title:'Servicio 5',
        desc: 'ipsum dolor sit amet consectetur adipisicing elit.',
        img: imagen5,
    },
    {
        title:'Servicio 6',
        desc:'ipsum dolor sit amet consectetur adipisicing elit.',
        img: imagen1,
    },
]

export default function Services() {
  return (
    <section id="servicios" className={styles.container}>
        <h2 className={styles.title}>Nuestros Servicios</h2>
        <div className={styles.grid}>
            {services.map((service, idx) => (
                <div className={styles.card} key={idx}>
                    <img src={service.img} alt={service.title}/>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
