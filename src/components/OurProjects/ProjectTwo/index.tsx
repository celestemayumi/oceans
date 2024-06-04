const ProjectTwo = () => {
  return (
    <div className="bg-[url('/project2.png')] bg-cover h-80 bg-center rounded-lg w-full flex items-center px-20">
      <p className="text-white text-lg w-1/2 m-8 font-medium text-justify">
        Participe das nossas emocionantes campanhas e eventos de limpeza de
        praias com a VitaliSea! Junte-se a nós enquanto nos unimos para proteger
        nossos preciosos ecossistemas marinhos. De emocionantes corridas de
        limpeza de praias a divertidos dias familiares de conscientização, há
        uma variedade de maneiras de se envolver. Juntos, podemos fazer a
        diferença, limpando nossas praias e protegendo a vida marinha para as
        gerações futuras.
      </p>
      <div className="w-1/2 flex flex-col items-center m-8">
        <h1 className="text-white text-5xl font-bold">VENHA FAZER PARTE!</h1>
        <button className="bg-[#F3F3F3] text-2xl text-[#1D4B7F] py-3 px-6 rounded-md font-bold my-6">
          SAIBA MAIS
        </button>
      </div>
    </div>
  );
};

export default ProjectTwo;
