import Image from "next/image";
import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex justify-between bg-slate-800 h-[94px] items-center px-5">
            <div className="flex gap-2 items-center">
                <div className="relative h-[40px] w-[40px]">
                    <Link href="/"><Image src="/images/pokeball.png" alt="PokeNext" fill /></Link>
                </div>                
                <Link className="text-white text-2xl" href="/">PokeNext</Link>
            </div>
            <ul className="flex gap-3 text-white">
                <li ><Link className="transition hover:border-b-2 hover:border-white" href="/">Home</Link></li>
                <li ><Link className="transition hover:border-b-2 hover:border-white" href="/about">Sobre</Link></li>
            </ul>
        </nav>
    )
}