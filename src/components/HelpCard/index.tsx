import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.jpg";
import card4 from "../../../public/card4.png";
import Image from "next/image";

const CardsData = [
  {
    id: 1,
    img: card1,
    title: "Reportar",
    desc: "Ajude no monitoramento das praias criando um alerta sobre situacoes preocupantes nestes locais.",
  },
  {
    id: 2,
    img: card2,
    title: "Seja colaborador",
    desc: "Faca parte do nosso time, tanto voluntario quanto parceiro, sua ajuda sempre sera bem-vinda! Ajude na limpeza da praia em eventou ou receba o selo de parceiro da VitaliSea",
  },
  {
    id: 3,
    img: card3,
    title: "Nossa IA",
    desc: "Saiba mais sobre nossa IA construida para identificar plasticos e entenda como voce pode ajudar no desenvolvimento dela.",
  },
  {
    id: 4,
    img: card4,
    title: "Consumo Consciente",
    desc: "Descubra como voce pode ajudar os nossos oceanos comecando pela sua casa, nos seus habitos!",
  },
];

const HelpCard = () => {
  return (
    <div className="bg-[#013E78] w-full h-full px-32 py-10">
      <h1 className="mb-10 text-center text-white font-bold text-4xl">
        VEJA COMO VOCE PODE AJUDAR OS NOSSOS OCEANOS
      </h1>
      <div className="bg-[#f3f3f3] rounded-lg"> 
        <div className="flex justify-evenly py-10">
          {CardsData.map(({ id, img, title, desc }) => {
            return (
              <div
                key={id}
                className="text-white shadow-md overflow-hidden w-[370px] h-[370px] relative group rounded-lg ">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0">
                    <Image
                      src={img}
                      alt="."
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full  bg-black/30 group-hover:backdrop-blur-sm duration-500 flex flex-col items-center justify-center ">
                    <h1 className="text-3xl font-bold text-center mb-5">{title}</h1>
                    <p className="font-medium text-justify">{desc}</p>
                    <button className="my-5 px-5 py-2 bg-[#f3f3f3] rounded-md text-[#013E78] font-bold text-xl">SAIBA MAIS </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
