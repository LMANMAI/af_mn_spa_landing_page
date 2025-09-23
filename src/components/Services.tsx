import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Settings, Shield, Zap, Users, Cog } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Selección e Implementación de Software (ERP/CRM)",
    description: "Evaluación de distintas opciones del mercado.",
    points: [
      "Recomendación de la solución más adecuada en función de las características y objetivos de la PyME",
      "Acompañamiento en la implementación, capacitación y soporte post-implementación"
    ]
  },
  {
    icon: Cog,
    title: "Consultoría y Estrategia Tecnológica",
    description: "Diagnóstico de la infraestructura y sistemas actuales.",
    points: [
      "Definición de una estrategia digital adaptada a las necesidades del negocio",
      "Asesoramiento en procesos de transformación digital"
    ]
  },
  {
    icon: Zap,
    title: "Optimización y Automatización de Procesos",
    description: "Identificación de áreas de mejora.",
    points: [
      "Integración de herramientas tecnológicas que permitan optimizar la gestión interna",
      "Implementación de flujos de trabajo automatizados"
    ]
  },
  {
    icon: Shield,
    title: "Ciberseguridad y Protección de Datos",
    description: "Evaluación de vulnerabilidades y riesgos.",
    points: [
      "Desarrollo de políticas de seguridad informática",
      "Implementación de soluciones de backup y protección de la información"
    ]
  },
  {
    icon: Users,
    title: "Capacitación y Soporte Tecnológico",
    description: "Capacitación en nuevas herramientas digitales.",
    points: [
      "Soporte técnico especializado",
      "Acompañamiento en la adopción de tecnologías emergentes"
    ]
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            Servicios Especializados
          </Badge>
          <h2 className="text-3xl lg:text-4xl">
            Soluciones Tecnológicas Integrales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrezco servicios completos de consultoría tecnológica diseñados específicamente para las necesidades de las PyMEs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
