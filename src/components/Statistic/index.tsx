import Image from "next/image";

const Statistic = () => {
  return (
    <section className="bg-[#f3f3f3] flex flex-col items-center w-full px-28 h-full shadow-sm">
      <h1 className="mt-10 text-4xl text-[#0F3057] font-bold">Estatisticas</h1>
      <div className="flex flex-row justify-between w-full mt-12 ">
        {
          // Primeiro Card
        }
        <div className="border border-[#0F3057] w-96 flex flex-col items-center p-10 rounded-lg justify-center">
          <h1 className="text-[#2195AA] text-5xl font-bold">22987.3%</h1>
          <p className="font-semibold text-lg text-center mt-5">
            Crescimento na produção de plástico de 1950 a 2019
          </p>
        </div>
        {
          // Segundo Card
        }
        <div className="border border-[#0F3057] w-1/3 flex flex-col items-center p-10 rounded-lg justify-center">
          <h1 className="font-medium text-center text-[#0F3057] text-2xl">
            Em 2019, dos 353 milhões de toneladas de resíduos plásticos do mundo
            ...
          </h1>
          <div className="flex justify-evenly w-full mt-8">
            <div className="w-28 text-center">
              <h1 className="text-[#2195AA] text-5xl font-bold">9%</h1>
              <p className="font-semibold text-lg text-center mt-5">
                Reciclados
              </p>
            </div>
            <div className="w-44 text-center">
              <h1 className="text-[#2195AA] text-5xl font-bold">22%</h1>
              <p className="font-semibold text-lg text-center mt-5">
                Queimados, jogados em aterros ilegais ou no meio ambiente
              </p>
            </div>
            <div className="w-28 text-center">
              <h1 className="text-[#2195AA] text-5xl font-bold">19%</h1>
              <p className="font-semibold text-lg text-center mt-5">
                Incinerados
              </p>
            </div>
          </div>
        </div>
        {
          //Terceiro Card
        }
        <div className="border border-[#0F3057] w-96 flex flex-col items-center p-10 rounded-lg justify-center ">
          <h1 className="text-[#2195AA] text-5xl font-bold">9.3 bi</h1>
          <p className="font-semibold text-lg text-center mt-5">
            9.3 bilhões de toneladas de plástico produzidos desde 1950 a 2019.
          </p>
        </div>
      </div>
      {
        // Second Content
      }
      <h1 className="mt-10 text-4xl text-[#0F3057] font-bold">Na América do Sul...</h1>
      <div className=" flex flex-row items-center justify-center w-full border border-[#0F3057] p-10 mt-10 h-fit rounded-lg mb-10 ">
        <Image
        className="mr-8"
        height={200}
        width={200}
        alt= 'Mapa da america do sul azul com o brasil destacado'
        src='/sa.png'
        />
        <div className="">
            <div className="flex flex-row items-center my-2">
            <h1 className="text-[#2195AA] text-6xl font-bold">4º</h1>
            <p className="font-semibold text-2xl ml-4">Brasil é o 4º maior produtor de lixo plástico do mundo</p>
            </div>
            <div className="flex flex-row items-center">
            <h1 className="text-[#2195AA] text-6xl font-bold">1%</h1>
            <p className="font-semibold text-2xl ml-4">Apenas 1% dessa produção é reciclada</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
