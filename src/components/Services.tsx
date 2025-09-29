import { useEffect, useRef, useState } from "react";
import styles from "../styles/Services.module.css";
import {
  Settings,
  Shield,
  Zap,
  Users,
  Cog,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Selección e Implementación de Software (ERP/CRM)",
    description: "Evaluación de distintas opciones del mercado.",
    points: [
      "Recomendación de la solución más adecuada en función de las características y objetivos de la PyME",
      "Acompañamiento en la implementación, capacitación y soporte post-implementación",
    ],
  },
  {
    icon: Cog,
    title: "Asesoría y Estrategia Tecnológica",
    description: "Diagnóstico de la infraestructura y sistemas actuales.",
    points: [
      "Definición de una estrategia digital adaptada a las necesidades del negocio",
      "Asesoramiento en procesos de transformación digital",
    ],
  },
  {
    icon: Zap,
    title: "Optimización y Automatización de Procesos",
    description: "Identificación de áreas de mejora.",
    points: [
      "Integración de herramientas tecnológicas que permitan optimizar la gestión interna",
      "Implementación de flujos de trabajo automatizados",
    ],
  },
  {
    icon: Shield,
    title: "Ciberseguridad y Protección de Datos",
    description: "Evaluación de vulnerabilidades y riesgos.",
    points: [
      "Desarrollo de políticas de seguridad informática",
      "Implementación de soluciones de backup y protección de la información",
    ],
  },
  {
    icon: Users,
    title: "Capacitación y Soporte Tecnológico",
    description: "Capacitación en nuevas herramientas digitales.",
    points: [
      "Soporte técnico especializado",
      "Acompañamiento en la adopción de tecnologías emergentes",
    ],
  },
];

export function Services() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, {
      passive: true,
    } as AddEventListenerOptions);
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", onScroll as any);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByPage = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.9) * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Servicios Especializados</span>
          <h2 className={styles.title}>Soluciones Tecnológicas Integrales</h2>
          <p className={styles.lead}>
            Ofrezco servicios completos de asesoría tecnológica diseñados
            específicamente para las necesidades de las PyMEs.
          </p>

          <div className={styles.valuesWrap}>
            <p className={styles.valuesIntro}>
              Nos mueven cinco valores: <strong>cercanía</strong>,{" "}
              <strong>practicidad</strong>,<strong> accesibilidad</strong>,{" "}
              <strong>transparencia</strong> y <strong>sostenibilidad</strong>.
            </p>

            <ul className={styles.valuesGrid}>
              <li className={styles.valueItem}>
                <p className={styles.valueItemTitle}>Cercanía</p>
                <p className={styles.valueItemText}>
                  Acompañamiento directo y comunicación clara en todo el
                  proceso.
                </p>
              </li>
              <li className={styles.valueItem}>
                <p className={styles.valueItemTitle}>Practicidad</p>
                <p className={styles.valueItemText}>
                  Soluciones simples que resuelven lo importante sin fricción.
                </p>
              </li>
              <li className={styles.valueItem}>
                <p className={styles.valueItemTitle}>Accesibilidad</p>
                <p className={styles.valueItemText}>
                  Propuestas alcanzables en costo y adopción para PyMEs.
                </p>
              </li>
              <li className={styles.valueItem}>
                <p className={styles.valueItemTitle}>Transparencia</p>
                <p className={styles.valueItemText}>
                  Expectativas, alcances y costos siempre a la vista.
                </p>
              </li>
              <li className={styles.valueItem}>
                <p className={styles.valueItemTitle}>Sostenibilidad</p>
                <p className={styles.valueItemText}>
                  Decisiones que perduran y escalan con el negocio.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.scrollerRegion}>
          {canLeft && <div className={styles.edgeLeft} />}
          {canRight && <div className={styles.edgeRight} />}

          <div className={styles.scrollerRow}>
            <button
              type="button"
              aria-label="Desplazar a la izquierda"
              onClick={() => scrollByPage("left")}
              disabled={!canLeft}
              className={`${styles.arrow} ${styles.arrowLeft}`}
            >
              <ChevronLeft size={20} />
            </button>

            <div ref={scrollerRef} className={styles.scroller}>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className={styles.slide}>
                    <div className={styles.card}>
                      <div className={styles.cardHeader}>
                        <div className={styles.iconBox}>
                          <Icon size={24} />
                        </div>
                        <h3 className={styles.cardTitle}>{service.title}</h3>
                        <p className={styles.cardDesc}>{service.description}</p>
                      </div>
                      <div className={styles.cardContent}>
                        <ul className={styles.points}>
                          {service.points.map((point, i) => (
                            <li key={i} className={styles.point}>
                              <span className={styles.bullet} />
                              <span className={styles.pointText}>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Desplazar a la derecha"
              onClick={() => scrollByPage("right")}
              disabled={!canRight}
              className={`${styles.arrow} ${styles.arrowRight}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
