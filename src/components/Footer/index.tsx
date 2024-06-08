import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[url('/footer.png')] bg-bottom w-full h-full px-20 py-10 flex justify-evenly">
      <div className="">
        <Image src="/logowhiter.png" alt="logo" width={300} height={300} />
      </div>
      <div className="text-white">
        <h1 className="text-xl">Nosso time:</h1>
        <p>1TDSPC</p>
        <ul>
          <li className="my-2">
            <Link href="https://www.linkedin.com/in/celestetanaka/">
              Celeste Tanaka - Front-End Dev & Data Scientist, RM552865
            </Link>
          </li>
          <li className="my-2">
            <Link href="https://www.linkedin.com/in/liviamarianalopes/">
              Livia Mariana - Back-End Developer, RM552558
            </Link>
          </li>
          <li className="my-2">
            <Link href="https://www.linkedin.com/in/luanavieirass/">
              Luana Vieira - DBA Dev & Research Analyst RM552994
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
