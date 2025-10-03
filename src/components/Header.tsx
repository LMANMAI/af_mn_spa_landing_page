// src/components/Header.tsx
import styles from "../styles/Header.module.css";
import { PropsWithChildren } from "react";
import logoIcon from "../assets/thumbnail_Solo mano.png";

function CTAButton({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a href={href} className={styles.ctaBtn}>
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={logoIcon} alt="Logo" className={styles.logo} />
          <div>
            <h1 className={styles.title}>Alfredo Mana</h1>
            <p className={styles.subtitle}>Asesoría Tecnológica</p>
          </div>
        </div>

        <nav className={styles.nav}>
          <a href="#beneficios" className={styles.navLink}>
            Beneficios
          </a>
          <a href="#servicios" className={styles.navLink}>
            Servicios
          </a>
          <a href="#biografia" className={styles.navLink}>
            Sobre mí
          </a>

          <a href="#modelo" className={styles.navLink}>
            Modelo de Trabajo
          </a>
          <CTAButton href="#contacto">Contacto</CTAButton>
        </nav>
      </div>
    </header>
  );
}
