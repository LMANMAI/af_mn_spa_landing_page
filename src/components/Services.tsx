import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import styles from "../styles/Services.module.css";
import { Settings, Shield, Zap, Users, Cog } from "lucide-react";

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
    title: "Consultoría y Estrategia Tecnológica",
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
  return (
    <section
      id="servicios"
      className="py-16 lg:py-24 bg-muted/30 overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-10 lg:mb-16">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            Servicios Especializados
          </Badge>
          <h2 className="text-3xl lg:text-4xl">
            Soluciones Tecnológicas Integrales
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrezco servicios completos de consultoría tecnológica diseñados
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

        {/* Scroller de servicios */}
        <div className="relative">
          <div
            style={{ overflowX: "auto", padding: "20px 0px" }}
            className="flex gap-6 flex-nowrap -mx-4 px-4 snap-x snap-mandatory scroll-smooth lg:flex-wrap lg:overflow-visible lg:-mx-4 lg:px-0"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="shrink-0 w-[300px] sm:w-[340px] md:w-[360px] snap-start lg:shrink lg:w-auto lg:basis-1/3 lg:px-4"
                >
                  <Card className="h-full flex flex-col rounded-2xl border border-slate-200/70 bg-white shadow-sm hover:shadow-md transition-shadow hover:border-primary/20">
                    <CardHeader className="pb-2">
                      <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-[20px] leading-snug text-slate-900">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-slate-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="mt-2 space-y-2">
                        {service.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span className="text-sm text-slate-600">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
