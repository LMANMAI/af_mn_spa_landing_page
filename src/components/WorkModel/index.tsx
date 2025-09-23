import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Target, Handshake } from "lucide-react";

export function WorkModel() {
  return (
    <section id="modelo" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            Metodología
          </Badge>
          <h2 className="text-3xl lg:text-4xl">Modelo de Trabajo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un enfoque flexible y transparente adaptado a la realidad de cada
            PyME.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">
                Esquema de Servicios Adaptable
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <p className="text-lg leading-relaxed">
                  El esquema de servicios se adapta a la realidad de cada PyME,
                  con un
                  <strong className="text-primary">
                    {" "}
                    modelo flexible y transparente
                  </strong>{" "}
                  que prioriza el{" "}
                  <strong className="text-primary">valor agregado</strong> por
                  encima de los costos fijos.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3>Adaptabilidad</h3>
                  <p className="text-sm text-muted-foreground">
                    Soluciones personalizadas según las necesidades específicas
                    de su empresa
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3>Transparencia</h3>
                  <p className="text-sm text-muted-foreground">
                    Comunicación clara sobre procesos, costos y resultados
                    esperados
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3>Valor Agregado</h3>
                  <p className="text-sm text-muted-foreground">
                    Enfoque en resultados concretos que generen impacto real en
                    su negocio
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
