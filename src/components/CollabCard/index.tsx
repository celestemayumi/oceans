import Image from "next/image";
import CollabCardProps from "./interfaces";

const CollabCard = (props: CollabCardProps) => {
  return (
    <div className="shadow-md w-[600px] h-[320px] flex items-center relative rounded-lg">
      <div className="relative w-full h-full flex">
        <div className="absolute inset-0">
          <Image
            src={props.source}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="."
            className="rounded-lg"
          />
        </div>
      </div >
      <Image
            src={props.char}
            width={350}
            height={200}
            alt="."
            className="absolute -translate-y-5 translate-x-64 flex-end hover:translate-x-[280px] transition-all"
        />
        <div className="absolute w-5/12">
            <h1 className=" drop-shadow-3xl mx-10 mb-10 text-4xl font-bold text-white">{props.title}</h1>
            <p className="drop-shadow-3xl mx-10 text-white text-xl font-semibold">{props.desc}</p>
            <button className="py-4 w-5/6 rounded-lg mx-10 mt-10 bg-[#013E78] text-white font-bold">CADASTRE-SE</button>
        </div>
    </div>
  );
};

export default CollabCard;
