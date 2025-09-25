import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImg from "../assets/thumbnail_Perfil vf.jpg";
import styles from "../styles/Hero.module.css";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-4xl leading-tight">
              Transformación Digital para PyMEs
            </h1>
            <p className="text-lg text-muted-foreground">
              Mi nombre es <strong>Alfredo Mana</strong> y me especializo en
              consultoría tecnológica para Micro, Pequeñas y Medianas Empresas.
            </p>
            <p className="text-lg">
              Mi objetivo es acompañar a su organización en la selección,
              implementación y optimización de herramientas de gestión (ERP, CRM
              u otros sistemas), asegurando que la inversión tecnológica se
              traduzca en mayor eficiencia, seguridad y competitividad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="#servicios">Ver Servicios</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contacto">Solicitar Consulta</a>
            </Button>
          </div>
        </div>

        {/* Imagen con tamaño controlado por CSS */}
        <div className={styles.imageWrap}>
          <ImageWithFallback
            src={profileImg}
            alt="Consultoría tecnológica para empresas"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
