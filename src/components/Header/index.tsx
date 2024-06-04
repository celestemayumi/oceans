'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

const Header = ()=>{
    const router = useRouter();

    const handleNavigate = (route:string) => {
        router.push(route);
    }

    return(
        <header className="flex flex-row p-4 fixed w-full backdrop-blur-sm z-10">
            <div className="w-1/2">
            <Image
            width={200}
            height={150}
            alt="Logo branca e azul"
            src='/logowhiter.png'
            />
            </div>
            <nav className="w-1/2 flex items-center">
                <ul className="text-white flex justify-evenly w-full text-xl font-bold cursor-pointer items-center">
                    <li onClick={() => handleNavigate("/projeto")} >O PROJETO</li>
                    <li onClick={() => handleNavigate("/parceiro")}>FACA PARTE</li>
                    <li onClick={() => handleNavigate("/eventos")}>EVENTOS</li>
                    <button className="bg-[#F3F3F3] text-[#1D4B7F] px-6 py-2 rounded-md">REPORTAR</button>
                </ul>
            </nav>
        </header>   
    )
}

export default Header