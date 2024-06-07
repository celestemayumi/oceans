import Image from "next/image";

const ProjectsComponent = () => {
  return (
    <div className="">
      <h1 className="text-center text-[#013E78] text-5xl font-bold">
        NOSSOS PROJETOS
      </h1>
      <div className="flex p-10">
        <div className="w-1/2 flex items-center justify-center ">
          <div className="bg-[#013E78] w-5/6 rounded-lg p-10">
            <h1 className="font-bold mb-5 text-white text-2xl">
              Descubra a Iniciativa VitaliSea: Seaker
            </h1>
            <p className="text-white text-lg font-normal">
              Em um mundo onde a poluição plástica ameaça os nossos preciosos
              oceanos e praias, a VitaliSea se preocupa com a causa. Nossa
              equipe de desenvolvedoras construiriam uma inteligência
              artificial, dedicada a detectar plástico em imagens, com o
              objetivo principal de limpar nossos ecossistemas aquáticos.
              <br />
              <br />
              Nossa IA utiliza algoritmos avançados para analisar imagens
              capturadas em diferentes locais costeiros e marítimos. Ela
              consegue identificar a presença de plástico, desde pequenos
              fragmentos até grandes resíduos, permitindo ações rápidas e
              eficazes de limpeza.
              <br />
              <br />
              Você pode fazer parte desta jornada conosco! Aperfeiçoar nossa IA
              requer um grande conjunto de dados de imagens para treinamento. É
              aí que você entra. Ao enviar suas imagens das praias e oceanos,
              você não apenas contribui para tornar nossa IA mais precisa, mas
              também se torna um guardião dos mares, ajudando a proteger esses
              ambientes vitais para as gerações futuras.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="h-full ">
            <Image
              src="/seaker.png"
              height={700}
              width={700}
              alt="."
              className="object-cover object-center w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex p-10">
        <div className="w-1/2 flex items-center justify-center">
          <div className="h-full w-[580px]">
            <Image
              src="/cleaning.jpeg"
              height={500}
              width={500}
              alt="."
              className="object-cover object-center w-full h-full rounded-xl"
            />
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center ">
          <div className="bg-[#013E78] w-5/6 rounded-lg p-10">
            <h1 className="font-bold mb-5 text-white text-2xl">
              Descubra a Iniciativa VitaliSea: Report
            </h1>
            <p className="text-white text-lg font-normal">
              A VitaliSea é uma organização dedicada à preservação dos oceanos,
              comprometida em criar soluções sustentáveis para enfrentar os
              desafios ambientais que afetam nossos mares. Uma das principais
              iniciativas da VitaliSea é a plataforma de relatórios de praias em
              más condições. Este serviço inovador permite que qualquer pessoa,
              em qualquer lugar do mundo, possa reportar situações de degradação
              nas praias, como lixo acumulado, poluição das águas, erosão
              costeira e outros problemas ambientais.
              <br />
              <br />
              Ao fazer um relatório, os usuários fornecem informações detalhadas
              sobre a situação, incluindo fotos e localização. Esses dados são
              então analisados pela equipe da VitaliSea, que os redireciona para
              organizações locais apropriadas, como ONGs, órgãos governamentais
              e grupos comunitários, para que medidas possam ser tomadas
              rapidamente. Esse sistema de resposta ágil garante que os
              problemas sejam atendidos de maneira eficiente, promovendo a saúde
              e a preservação das praias e oceanos.
              <br />
              <br />
              Além disso, a VitaliSea organiza eventos de voluntariado, como
              mutirões de limpeza de praias e campanhas de conscientização,
              envolvendo a comunidade na conservação marinha. Com essas
              iniciativas, a VitaliSea busca criar um movimento global de
              proteção dos oceanos, promovendo praias e mares mais limpos e
              saudáveis para todos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
