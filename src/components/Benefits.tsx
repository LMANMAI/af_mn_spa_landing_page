import {
  TrendingUp,
  DollarSign,
  Shield,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";
import styles from "../styles/Benefits.module.css";

const benefits = [
  {
    icon: Lightbulb,
    title: "Innovación y actualización constante",
    description: "Manténgase competitivo frente a los cambios del mercado",
  },
  {
    icon: TrendingUp,
    title: "Mejora en la eficiencia y productividad operativa",
    description:
      "Procesos más ágiles que impulsan el crecimiento de tu empresa",
  },
  {
    icon: DollarSign,
    title: "Optimización de recursos y reducción de costos",
    description: "Maximiza tu inversión tecnológica con soluciones eficientes",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento estratégico y soporte continuo",
    description: "Relación de largo plazo para tu crecimiento sostenido",
  },
  {
    icon: Shield,
    title: "Seguridad en la gestión de la información",
    description: "Protección integral de tus datos críticos empresariales",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Valor Agregado</span>
          <h2 className={styles.title}>Beneficios para tu Empresa</h2>
          <p className={styles.lead}>
            Resultados concretos que transformarán la manera en que tu PyME
            opera y compite en el mercado.
          </p>
          <div className={styles.ctaRow}>
            <a
              href="#contacto"
              aria-label="Agendar Consulta - ir a la sección de contacto"
              className={styles.ctaButton}
            >
              Quiero estos beneficios en mi PyME
            </a>
          </div>
        </div>

        <ul className={styles.grid}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <li key={index} className={styles.card}>
                <div className={styles.iconBox}>
                  <Icon size={32} />
                </div>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                <p className={styles.cardDesc}>{benefit.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
