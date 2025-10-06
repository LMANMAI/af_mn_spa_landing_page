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
              Innovación Digital para tu{" "}
              <span className={styles.titleEm}>PyME</span>
            </h1>

            <p className={styles.lead}>
              Hago que la tecnología trabaje para vos, no al revés
            </p>

            <p className={styles.body}>
              Mi objetivo es acompañar a tu empresa y tu equipo en la selección,
              implementación y optimización de herramientas de gestión,
              asegurando que la inversión tecnológica se traduzca en mayor
              eficiencia, seguridad y competitividad.
            </p>

            <div className={styles.ctaRow}>
              <Button className={styles.btnPrimary} size="lg" asChild>
                <a href="#servicios">Ver Servicios</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contacto">Agendar reunión</a>
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
