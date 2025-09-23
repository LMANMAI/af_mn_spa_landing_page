export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4">Alfredo Mana</h3>
            <p className="text-primary-foreground/80">
              Consultoría Tecnológica especializada en PyMEs. Transformando
              empresas a través de la tecnología.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Servicios Principales</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Implementación de ERP/CRM</li>
              <li>• Estrategia Tecnológica</li>
              <li>• Automatización de Procesos</li>
              <li>• Ciberseguridad</li>
              <li>• Capacitación Tecnológica</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Alfredo Mana - Consultoría Tecnológica. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
