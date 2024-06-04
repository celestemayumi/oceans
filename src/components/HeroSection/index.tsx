import HeroSecProps from "./interface";


const HeroSection = (props:HeroSecProps) => {
  return (
    <section>
      <div className="top-0  left-0 w-full h-full bg-black"></div>
      <video
        className="h-full w-full object-cover"
        src={props.source}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center text-white p-40 mt-20">
        <div className="mb-8 w-32 bg-[#93D6E2] h-6"></div>
        <div className="text-8xl font-bold leading-snug	">
          <p>{props.title1}</p>
          <p>
            {props.title2} <span className="text-[#93D6E2]">{props.highlight}</span>
          </p>
        </div>
        <p className="w-1/2 text-lg mt-10">
        {props.desc}
        </p>
        <button className="bg-[#f3f3f3] text-[#1D4B7F] w-1/5 font-bold rounded-md py-2 px-6 mt-16 text-2xl">{props.button}</button>
      </div>
    </section>
  );
};

export default HeroSection;
