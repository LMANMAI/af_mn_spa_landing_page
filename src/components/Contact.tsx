import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

const bookingUrl = "https://calendar.app.google/uxURa1WvWaK4QckR9";

const whatsappNumber = "5491169811106";
const whatsappMsg = encodeURIComponent(
  "Hola, me gustaría coordinar una consulta inicial. ¿Tienen disponibilidad?"
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

export function Contact() {
  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            Conectemos
          </Badge>
          <h2 className="text-3xl lg:text-4xl">
            ¿Listo para Transformar su PyME?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comencemos con una consulta gratuita para evaluar las necesidades
            tecnológicas de su empresa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>Agende una Reunión de Diagnóstico</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Coordine una videollamada de 30 minutos para analizar su
                situación actual y definir próximos pasos. Sin compromiso.
              </p>

              <Button asChild className="w-full" size="lg">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir agenda en Google Calendar"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </a>
              </Button>

              <Button variant="outline" asChild className="w-full">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Coordinar por WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>
                      <a
                        href="mailto:alfredo.mana@consultech.com"
                        className="hover:underline"
                      >
                        alfredo.mana@consultech.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono</p>
                    <p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        aria-label="Contactar por WhatsApp"
                        title="Contactar por WhatsApp"
                      >
                        +54 9 11 6981-1106
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Respuesta garantizada en menos de 24 horas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
