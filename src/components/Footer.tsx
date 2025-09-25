import styles from "../styles/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.brand}>Alfredo Mana</h3>
            <p className={styles.muted}>
              Consultoría Tecnológica especializada en PyMEs. Transformando
              empresas a través de la tecnología.
            </p>
          </div>

          <div>
            <h4 className={styles.heading}>Servicios Principales</h4>
            <ul className={styles.linkList}>
              <li>Implementación de ERP/CRM</li>
              <li>Estrategia Tecnológica</li>
              <li>Automatización de Procesos</li>
              <li>Ciberseguridad</li>
              <li>Capacitación Tecnológica</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.heading}>Redes y Contacto</h4>
            <ul className={styles.socialList}>
              <li>
                <a
                  className={styles.socialLink}
                  href="https://www.linkedin.com/in/alfredomana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className={styles.socialLink}
                  href="https://www.instagram.com/alfredomana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className={styles.socialLink}
                  href="https://wa.me/5491169811106"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canal de WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.finePrint}>
            © 2024 Alfredo Mana - Consultoría Tecnológica. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
