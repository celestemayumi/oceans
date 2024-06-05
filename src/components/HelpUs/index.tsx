import Image from "next/image";

const HelpUs = () => {
  return (
    <section className="bg-[#013E78] w-full h-full px-20 py-10">
      <h1 className="text-white font-bold text-5xl mb-6">
        QUER <span className="text-[#93D6E2]">AJUDAR</span> DE OUTRA FORMA?
      </h1>
      <div className="flex justify-evenly bg-[url('/praiabg.png')] bg-cover bg-center rounded-md">
        <Image className="w-1/4" src="/MARCO.svg" height={500} width={150} alt="marco" />
        <div className="w-2/3 items-center justify-center flex flex-col px-12">
        <h1 className="text-white drop-shadow-3xl font-bold text-4xl">CONHEÇA NOSSA FERRAMENTA:</h1>
        <button className="my-6 bg-[#013E78] text-white font-bold text-3xl px-8 py-4 rounded-md">REPORTAR</button>
        <p className="text-xl font-medium text-justify backdrop-blur-md rounded-lg p-2">
          Nosso programa oferece uma funcionalidade crucial para a segurança das
          praias. Com um simples clique no botão acima, você pode relatar às
          nossas equipes alguma praia que está em más condições. Basta inserir
          os dados relevantes e nós nos encarregaremos de informar as
          instituições locais sobre a ocorrência. Dessa forma, colaboramos para
          garantir a segurança de todos os frequentadores das praias.
          Experimente essa ferramenta hoje e contribua para um ambiente marinho
          mais seguro para todos
        </p>
      </div>
      </div>
      
    </section>
  );
};

export default HelpUs;
