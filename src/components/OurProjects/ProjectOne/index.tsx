import Image from "next/image";
const ProjectOne = () => {
  return (
    <div className="bg-[url('/project1.png')] bg-cover h-80 bg-center rounded-lg w-full flex items-center px-20">
      <div className="w-1/2 flex justify-center">
      <Image className="" src="/logowhiter.png" width={350} height={350} alt="logo"></Image>
      </div>
      <div className="w-1/2 m-8">
        <p className="text-white text-lg font-medium text-justify">
          Nos da VitaliSea criamos uma IA, capaz de identificar plásticos e resíduos em imagens com alta precisao. Equipado com algoritmos de última geração, ele
          analisa cada pixel para identificar e categorizar diferentes tipos de
          materiais, ajudando-nos a mapear e mitigar a poluição marinha de forma
          eficiente. Com sua capacidade de aprendizado contínuo, ele se torna
          mais inteligente a cada imagem analisada, prometendo um futuro mais
          limpo para nossos oceanos.
        </p>
        <button className="bg-[#F3F3F3] text-2xl text-[#013E78] py-3 px-6 rounded-md font-bold my-6">
          SAIBA MAIS
        </button>
      </div>
    </div>
  );
};

export default ProjectOne;
