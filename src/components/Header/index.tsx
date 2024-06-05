'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Header = ()=>{
    const [color, setColor] = useState(false)
    const changeColor = ()=>{
        if(window.scrollY >=800) {
            setColor(true)
        }else {
            setColor(false)
        }
    }
    
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", changeColor);
    }

    const router = useRouter();

    const handleNavigate = (route:string) => {
        router.push(route);
    }

    return(
        <header className={color ? 'flex flex-row p-4 fixed w-full backdrop-blur-sm z-10 bg-[#1D4B7F] ease-in duration-300	': 'flex flex-row p-4 fixed w-full backdrop-blur-sm z-10 ease-in duration-300	'}>
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