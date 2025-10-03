import profileImg from "../assets/thumbnail_Perfil vf.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import styles from "../styles/Hero.module.css";

export function AboutMe() {
  return (
    <section id="biografia" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <ImageWithFallback
              src={profileImg}
              alt="Asesoría tecnológica para empresas"
              className={styles.heroImage}
            />
          </div>

          <div className={styles.textCol}>
            <h2 className={styles.title}>Sobre mí</h2>

            <p className={styles.body}>
              Soy Alfredo Mana, analista de sistemas y asesor en informática,
              especializado en la implementación de ERP, CRM y soluciones
              digitales. A lo largo de mi trayectoria trabajé en sectores como
              consumo masivo, transporte, logística, producción y comercio, lo
              que me dio una visión integral de los procesos. Además de lo
              técnico, me formé en coaching, PNL y psicología social, porque
              estoy convencido de que la tecnología sola no alcanza: el
              verdadero cambio se logra con escucha activa, confianza y equipos
              comprometidos. Con mi proyecto{" "}
              <strong style={{ color: "#17367f" }}>Para PyMEs</strong>, acompaño
              a dueños y responsables de pequeñas y medianas empresas a ordenar
              su gestión y crecer con claridad. Mi enfoque se basa en cercanía,
              practicidad, accesibilidad y transparencia, con un propósito
              claro:{" "}
              <strong style={{ color: "#17367f" }}>
                Volver a lo esencial.
              </strong>
              <strong style={{ color: "#67b246" }}>
                {" "}
                Crecer juntos siempre.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
