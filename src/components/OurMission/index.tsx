import Image from "next/image";

const OurMission = () => {
  return (
    <div className="px-12 py-10">
      <h1 className="font-bold text-center text-5xl text-[#013E78]">Nossa missao</h1>
      <div className="border-2 border-[#013E78] px-20 py-10 m-5 rounded-lg">
        <h1 className="text-[#013E78] text-4xl mb-10 font-bold">Entenda a causa:</h1>
        <p className="font-medium text-2xl my-10">
          Você já parou para pensar na imensidão dos oceanos e na importância
          vital que eles têm para o nosso planeta? Imagine um mundo onde as
          águas cristalinas e os recifes de corais vibrantes são uma realidade
          preservada para as futuras gerações. Este é o futuro que buscamos
          construir. 
          <br />
          <br />
          Nosso projeto para salvar os oceanos é uma iniciativa
          que busca combater a poluição, proteger a vida marinha e
          promover a sustentabilidade dos ecossistemas oceânicos. Estamos
          reunindo mentes brilhante e indivíduos
          apaixonados para fazer a diferença. 
          <br />
          <br />
          Ao se juntar a nós, você terá a
          oportunidade de fazer parte de uma jornada emocionante em direção a um
          futuro mais limpo e mais saudável para os oceanos e para todos os
          seres vivos que deles dependem. Venha fazer parte dessa causa! Juntos,
          podemos criar um impacto positivo duradouro e garantir que os oceanos
          continuem a inspirar e sustentar a vida em nosso planeta. 
         <br />
         <br />  
        Vamos salvar os oceanos, um passo de cada vez. 🌊💙
        </p>
        <div className="w-full h-[400px]">
            <Image
            src='/coral.jpg'
            width={1000}
            height={1000}
            alt="coral"
            className="object-cover object-center w-full h-full rounded-xl"
            />
        </div>
      </div>
    </div>
  );
};

export default OurMission
