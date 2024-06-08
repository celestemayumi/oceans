import "./styles.css";
import Image from "next/image";

const EventCard = (props: any) => {
  return (
    <div className="div-event-card ">
      <div className="event-card ">
        <h1
          className=" drop-shadow-3xl mx-10 text-xl text-white font-semibold"
          id="title-event"
        >
          {props.title}
        </h1>
        <p className="desc drop-shadow-3xl mx-10 text-xl text-white font-semibold">
          {props.desc}
        </p>
        <p className=" mx-10 text-xl text-white ">{props.local}</p>
        <p className=" mx-10 text-xl text-white ">{props.data}</p>
        <button
          className="py-4 w-1/3  mx-10 mt-10 bg-[#fff] text-black font-bold"
          onClick={props.click}
        >
          INSCREVA-SE
        </button>
      </div>
    </div>
  );
};

export default EventCard;
