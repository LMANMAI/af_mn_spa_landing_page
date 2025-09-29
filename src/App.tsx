import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { WorkModel } from "./components/WorkModel";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AboutMe } from "./components/AboutMe";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Benefits />
        <WorkModel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
