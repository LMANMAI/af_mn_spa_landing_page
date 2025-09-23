import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl leading-tight">
              Transformación Digital para{" "}
              <span className="text-primary">PyMEs</span>
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
        <div className="relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTc5NzIzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Consultoría tecnológica para empresas"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
