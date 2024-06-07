import HeroSection from "@/components/HeroSection"
import OurMission from "@/components/OurMission"
import ProjectsComponent from "@/components/ProjectsComponent"

export default function Projeto(){
    return(
        <>
        <HeroSection
        source="ourmission.mp4"
        title1="Conheca"
        title2="o"
        highlight="nosso projeto"
        desc="Junte-se a nós para salvar os oceanos! Nossa missão é proteger esses tesouros naturais, preservar a vida marinha e promover a sustentabilidade. Venha fazer parte desse movimento de transformação e ajude a construir um futuro mais limpo e saudável para nosso planeta. Clique no botao abaixo e saiba mais sobre o nosso projeto!"
        button="SAIBA MAIS"
        />
        <OurMission/>
        <ProjectsComponent/>
        </>
    )
}