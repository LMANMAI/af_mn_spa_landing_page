import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImg from "../assets/thumbnail_logoCompleto.png";
import styles from "../styles/Hero.module.css";

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <h1 className={styles.title}>
              Transformación Digital para{" "}
              <span className={styles.titleEm}>PyMEs</span>
            </h1>

            <p className={styles.lead}>
              Mi nombre es <strong>Alfredo Mana</strong> y me especializo en
              asesoría tecnológica para Micro, Pequeñas y Medianas Empresas.
            </p>

            <p className={styles.body}>
              Mi objetivo es acompañar a su organización en la selección,
              implementación y optimización de herramientas de gestión (ERP, CRM
              u otros sistemas), asegurando que la inversión tecnológica se
              traduzca en mayor eficiencia, seguridad y competitividad.
            </p>

            <div className={styles.ctaRow}>
              <Button className={styles.btnPrimary} size="lg" asChild>
                <a href="#servicios">Ver Servicios</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contacto">Solicitar Consulta</a>
              </Button>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <ImageWithFallback
              src={profileImg}
              alt="Asesoría tecnológica para empresas"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
