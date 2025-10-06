import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";
import styles from "../styles/Contact.module.css";

const bookingUrl = "https://calendar.app.google/xtKHuv7n5ogVZVcT7";

const whatsappNumber = "5491169811106";
const whatsappMsg = encodeURIComponent(
  "Hola, me gustaría coordinar una consulta inicial. ¿Tienen disponibilidad?"
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

export function Contact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge variant="secondary" className={styles.badge}>
            Conectemos
          </Badge>
          <h2 className={styles.title}>¿Listo para Transformar tu PyME?</h2>
          <p className={styles.lead}>
            Demos el primer paso juntos para identificar tus necesidades
            tecnológicas y diseñar un plan a medida para tu empresa.
          </p>
        </div>

        <div className={styles.grid}>
          <Card className={styles.card}>
            <CardHeader>
              <CardTitle className={styles.cardTitle}>
                <MessageCircle size={20} className={styles.titleIcon} />
                <span>Agendá una Reunión de Relevamiento</span>
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.cardBody}>
              <p className={styles.muted}>
                Coordine una videollamada de 60 minutos para analizar tu
                situación actual y definir próximos pasos.
              </p>

              <Button asChild className={styles.btnPrimary}>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir agenda en Google Calendar"
                >
                  <Calendar size={16} className={styles.btnIcon} />
                  Agendar reunión
                </a>
              </Button>

              {/* <Button variant="outline" asChild className={styles.btnOutline}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} className={styles.btnIcon} />
                  Coordinar por WhatsApp
                </a>
              </Button> */}
            </CardContent>
          </Card>

          <Card className={styles.card}>
            <CardHeader>
              <CardTitle className={styles.cardTitleOnly}>
                Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.cardBody}>
              <div className={styles.stack}>
                <div className={styles.row}>
                  <div className={styles.iconBox}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className={styles.smallMuted}>Email</p>
                    <p>
                      <a
                        href="mailto:alfredo.mana@consultech.com"
                        className={styles.link}
                      >
                        alfredomana@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.iconBox}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className={styles.smallMuted}>Teléfono</p>
                    <p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label="Contactar por WhatsApp"
                        title="Contactar por WhatsApp"
                      >
                        +54 9 11 6981-1106
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
