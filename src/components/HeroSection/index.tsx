const HeroSection = () => {
  return (
    <section>
      <div className="top-0  left-0 w-full h-full bg-black"></div>
      <video
        className="h-full w-full object-cover"
        src="/ocean.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center text-white p-40 mt-20">
        <div className="mb-8 w-32 bg-[#93D6E2] h-6"></div>
        <div className="text-8xl font-bold leading-snug	">
          <p>PROTEJA OS</p>
          <p>
            NOSSOS <span className="text-[#93D6E2]">OCEANOS</span>
          </p>
        </div>
        <p className="w-1/2 text-lg mt-10">
        Proteger nossos oceanos é essencial para o futuro do nosso planeta. Da preservação da biodiversidade marinha à promoção de práticas pesqueiras sustentáveis e à mitigação da poluição oceânica, cada ação conta. Ao projetar nossos oceanos, estamos moldando um mundo mais saudável e equilibrado para as gerações futuras.
        </p>
        <button className="bg-[#f3f3f3] text-[#1D4B7F] w-1/5 font-bold rounded-md py-2 px-6 mt-16 text-2xl">SAIBA MAIS</button>
      </div>
    </section>
  );
};

export default HeroSection;
