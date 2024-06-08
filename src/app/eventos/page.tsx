import EventList from "@/components/EventList";
import EventCard from "@/components/EventCard";
import ImageSection from "@/components/ImageSection";
export default function Eventos() {
  return (
    <>
      <ImageSection
        source="/card2.png"
        title1="PARTICIPE DE EVENTOS"
        title2="COMO"
        highlight="VOLUNTÁRIO"
        desc="Estamos convidando voluntários apaixonados como você para se juntarem à nossa iniciativa de limpeza de praias, parte de nosso compromisso com a economia azul. Este é um chamado para todos que acreditam no poder da ação comunitária e no impacto positivo que podemos ter juntos."
        button="FAÇA PARTE"
      />
      <EventList />
    </>
  );
}
