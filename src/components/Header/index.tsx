import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1>Alfredo Mana</h1>
          <p className="text-muted-foreground">Consultoría Tecnológica</p>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#servicios" className="hover:text-primary transition-colors">
            Servicios
          </a>
          <a
            href="#beneficios"
            className="hover:text-primary transition-colors"
          >
            Beneficios
          </a>
          <a href="#modelo" className="hover:text-primary transition-colors">
            Modelo de Trabajo
          </a>
          <Button asChild>
            <a href="#contacto">Contacto</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
