import Image from "next/image";
import Link from "next/link";

const CardsData = [
  {
    id: 1,
    img: "/oceana.png",
    title: "Oceana",
    desc: "Oceana, inc. é uma organização sem fins lucrativos para conservação dos oceanos. Está sediada em Washington D.C., com diversas sedes pelo mundo. Atualmente, a Oceana conta com uma equipe de cerca de 200 e 6.000 voluntários, e tem receitas de quase 50 milhões de dólares  ",
    linkweb: "https://oceana.org/our-campaigns/feedtheworld/",
  },
  {
    id: 2,
    img: "/seashep.png",
    title: "Sea Shepherd",
    desc: "A Sea Shepherd Conservation Society (com a sigla SSCS) é uma organização sem fins lucrativos, focada na conservação de seres marinhos, sediada em Friday Harbor, Washington, nos Estados Unidos. ",
    linkweb: "https://seashepherd.org/our-mission/",
  },
  {
    id: 3,
    img: "/oceanconservancy.png",
    title: "Ocean Conservancy",
    desc: "Ocean Conservancy é um grupo sem fins lucrativos de defesa ambiental com sede em Washington, D.C.. A organização busca promover ecossistemas oceânicos saudáveis e diversos, prevenir a poluição marinha, as mudanças climáticas e advogar contra práticas que ameacem a vida oceânica e humana.      ",
    linkweb: "https://oceanconservancy.org/trash-free-seas/",
  },
  {
    id: 4,
    img: "/images.png",
    title: "Surfrider",
    desc: "A Surfrider é uma organização ambiental sem fins lucrativos sediada em San Clemente. Ela trabalha para proteger e preservar os oceanos, ondas e praias do mundo. Ela se concentra na qualidade da água, acesso à praia, preservação de praias e pontos de surfe, e na sustentabilidade dos ecossistemas marinhos e costeiros.",
    linkweb: "https://www.surfrider.org/mission",
  },
];

const InfoCard = () => {
  return (
    <div className="">
      <div className=" flex flex-wrap justify-evenly">
        {CardsData.map(({ id, img, title, desc, linkweb }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md overflow-hidden w-[370px] h-[370px] relative group rounded-lg mb-10"
            >
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
                <button className="my-5 px-5 py-2 bg-[#f3f3f3] rounded-md text-[#013E78] font-bold text-xl">
                  <Link href={linkweb}>SAIBA MAIS</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoCard;
