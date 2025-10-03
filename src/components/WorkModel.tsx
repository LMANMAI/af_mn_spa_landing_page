import { CheckCircle, Target, Handshake } from "lucide-react";
import styles from "../styles/WorkModel.module.css";

export function WorkModel() {
  return (
    <section id="modelo" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Cómo trabajo</span>
          <h2 className={styles.title}>Modelo de Trabajo</h2>
          <p className={styles.lead}>
            Escucho tus necesidades, detecto los puntos críticos y diseño un
            plan claro y a tu medida para convertirlos en oportunidades. Con un
            enfoque flexible y transparente adaptado a la realidad de cada PyME.
          </p>
        </div>

        <div className={styles.cardWrap}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <Handshake size={32} />
              </div>
              <h3 className={styles.cardTitle}>
                Esquema de Servicios Adaptable
              </h3>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.centerText}>
                El esquema de servicios se adapta a la realidad de cada PyME,
                con un
                <strong className={styles.emph}>
                  {" "}
                  modelo flexible y transparente
                </strong>{" "}
                que prioriza el{" "}
                <strong className={styles.emph}>valor agregado</strong> por
                encima de los costos fijos.
              </p>

              <div className={styles.grid}>
                <div className={styles.item}>
                  <div className={styles.itemIcon}>
                    <Target size={24} />
                  </div>
                  <h4 className={styles.itemTitle}>Adaptabilidad</h4>
                  <p className={styles.itemText}>
                    Soluciones personalizadas según las necesidades específicas
                    de tu empresa
                  </p>
                </div>

                <div className={styles.item}>
                  <div className={styles.itemIcon}>
                    <CheckCircle size={24} />
                  </div>
                  <h4 className={styles.itemTitle}>Transparencia</h4>
                  <p className={styles.itemText}>
                    Comunicación clara sobre procesos, costos y resultados
                    esperados
                  </p>
                </div>

                <div className={styles.item}>
                  <div className={styles.itemIcon}>
                    <CheckCircle size={24} />
                  </div>
                  <h4 className={styles.itemTitle}>Valor Agregado</h4>
                  <p className={styles.itemText}>
                    Enfoque en resultados concretos que generen impacto real en
                    su negocio
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <a
              href="#contacto"
              aria-label="Agendar Consulta - ir a la sección de contacto"
              className={styles.ctaButton}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
