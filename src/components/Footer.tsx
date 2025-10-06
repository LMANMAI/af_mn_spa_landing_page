import styles from "../styles/Footer.module.css";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaSpotify } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.brand}>Alfredo Mana</h3>
            <p className={styles.muted}>
              Asesoría Tecnológica especializada en PyMEs. Transformando
              empresas a través de la tecnología.
            </p>
          </div>

          <div>
            <h4 className={styles.heading}>Servicios Principales</h4>
            <ul className={styles.linkList}>
              <li>Implementación de ERP/CRM</li>
              <li>Estrategia Tecnológica</li>
              <li>Automatización de Procesos</li>
              <li>Capacitación Tecnológica</li>
              <li>Protección de Datos</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.heading}>Redes y Contacto</h4>
            <ul className={styles.socialList}>
              <li>
                <a
                  className={styles.socialLink}
                  href="https://www.linkedin.com/in/alfredomana/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className={styles.socialIcon} />
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className={styles.socialLink}
                  href="https://www.instagram.com/alfredomana.ok/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className={styles.socialIcon} />
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
                  <FaWhatsapp className={styles.socialIcon} />
                  Canal de WhatsApp
                </a>
              </li>
              <li>
                <a
                  className={styles.socialLink}
                  href="https://open.spotify.com/show/0czP3gyaZXgFMYhQ6j4nmc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSpotify className={styles.socialIcon} />
                  Spotify
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.finePrint}>
            © 2024 Alfredo Mana - Asesoría Tecnológica. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
