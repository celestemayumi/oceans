import HeroSection from "@/components/HeroSection";
import Statistic from "@/components/Statistic";
import OurProjects from "@/components/OurProjects";
import HelpCard from "@/components/HelpCard";

export default function Home() {
  return (
    <main>
      <HeroSection
        source="/ocean.mp4"
        title1="PROTEJA OS"
        title2="NOSSOS"
        highlight="OCEANOS"
        desc="Proteger nossos oceanos é essencial para o futuro do nosso planeta. Da preservação da biodiversidade marinha à promoção de práticas pesqueiras sustentáveis e à mitigação da poluição oceânica, cada ação conta. Ao projetar nossos oceanos, estamos moldando um mundo mais saudável e equilibrado para as gerações futuras."
        button="SAIBA MAIS"
      />
      <Statistic />
      <OurProjects />
      <HelpCard />
    </main>
  );
}
