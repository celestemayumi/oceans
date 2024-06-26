import HeroSection from "@/components/HeroSection";
import CollabForm from "@/components/CollabForm";
import CollabCard from "@/components/CollabCard"
import HelpUs from "@/components/HelpUs"
import Awareness from "@/components/Awareness"

export default function Parceiro() {
  return (
    <>
      <HeroSection
        source="/team.mp4"
        title1="FAÇA PARTE"
        title2="DO"
        highlight="NOSSO TIME"
        desc="Proteger nossos oceanos é essencial para o futuro do nosso planeta. Da preservação da biodiversidade marinha à promoção de práticas pesqueiras sustentáveis e à mitigação da poluição oceânica, cada ação conta. Ao projetar nossos oceanos, estamos moldando um mundo mais saudável e equilibrado para as gerações futuras."
        button="SAIBA MAIS"
        />
        <h1 className="mt-10 text-[#013E78] text-center text-4xl font-bold">Veja como fazer parte</h1>
        <CollabForm />
        <Awareness></Awareness>
        </>
    )
}