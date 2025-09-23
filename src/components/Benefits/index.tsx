import { Badge } from "./ui/badge";
import {
  TrendingUp,
  DollarSign,
  Shield,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Optimización de recursos y reducción de costos",
    description: "Maximice su inversión tecnológica con soluciones eficientes",
  },
  {
    icon: TrendingUp,
    title: "Mejora en la eficiencia y productividad operativa",
    description:
      "Procesos más ágiles que impulsan el crecimiento de su empresa",
  },
  {
    icon: Shield,
    title: "Seguridad en la gestión de la información",
    description: "Protección integral de sus datos críticos empresariales",
  },
  {
    icon: Lightbulb,
    title: "Innovación y actualización constante",
    description: "Manténgase competitivo frente a los cambios del mercado",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento estratégico y soporte continuo",
    description: "Relación de largo plazo para su crecimiento sostenido",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            Valor Agregado
          </Badge>
          <h2 className="text-3xl lg:text-4xl">Beneficios para su Empresa</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados concretos que transformarán la manera en que su PyME
            opera y compite en el mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg leading-tight">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
