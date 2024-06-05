
const EventCard = (props: any) => {
  return (
    <div className=" ">

        <div className="rounded-lg ">
            <h1 className="  mx-10 text-xl font-semibold">{props.title}</h1>
            <p className=" mx-10 text-xl font-semibold">{props.desc}</p>
            <p className=" mx-10 text-xl font-semibold">{props.local}</p>
            <p className=" mx-10 text-xl font-semibold">{props.data}</p>
            <button className="py-4 w-5/6  mx-10 mt-10 bg-[#013E78] text-white font-bold" onClick={props.click}>INSCREVA-SE</button>
        </div>
    </div>
  );
};

export default EventCard;
