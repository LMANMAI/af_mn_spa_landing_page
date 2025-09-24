import { Button } from "./ui/button";
import logoIcon from "../assets/thumbnail_Solo mano.png";
import logoText from "../assets/thumbnail_Solo nombre.png";

export function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logoIcon} alt="Logo" className="w-10 h-10" />
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-semibold text-[#1e3a8a]">
                Alfredo Mana
              </h1>
              <img src={logoText} alt="Para PyMEs" className="h-6" />
            </div>
            <p className="text-muted-foreground text-sm">
              Consultoría Tecnológica
            </p>
          </div>
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
