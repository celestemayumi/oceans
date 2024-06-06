import InfoCard from "./InfoCard";



const Awareness = () => {
  return (
    <div className="py-10">
      <h1 className="text-[#013E78] text-5xl font-bold text-center">
        CONHECA MAIS SOBRE A NOSSA CAUSA:
      </h1>
      <div className="flex py-10">
        <div className="w-1/2 px-28">
            <h1 className="text-4xl font-bold text-[#5ed7f9] mb-10">Por que devemos ajudar nossos oceanos?</h1>
            <p className="text-2xl">
            Os oceanos são os pulmões do nosso planeta, fornecendo oxigênio para a
            vida na Terra, além de serem lar de uma vasta biodiversidade. No
            entanto, estamos enfrentando uma crise global devido à poluição,
            sobrepesca, acidificação e mudanças climáticas, todos ameaçando a
            saúde dos oceanos.
            <br />
            <br />
                A conscientização sobre os oceanos é crucial porque
            sua saúde afeta diretamente a nossa. Eles regulam o clima, fornecem
            alimentos e sustento para milhões de pessoas ao redor do mundo e são
            fonte de descobertas científicas que podem ajudar a resolver problemas
            globais. 
            <br />
            <br />
            Devemos nos preocupar com o futuro dos oceanos porque, se
            continuarmos a poluir e explorar sem limites, prejudicaremos não
            apenas a vida marinha, mas também a nossa própria sobrevivência.
            Precisamos agir agora, adotando práticas sustentáveis, reduzindo o uso
            de plásticos e apoiando iniciativas de conservação para garantir que
            as gerações futuras possam desfrutar dos benefícios dos oceanos.
            </p>
        </div>
        <div className="flex flex-wrap gap-10 items-center justify-evenly w-1/2 ">
            <InfoCard/>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
