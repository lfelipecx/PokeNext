'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"


export default function Card({pokemon}){
    const [details, setDetails] = useState(null)

    const detailsPokemons = async () => {
        const response = await fetch(pokemon.url);    
        const json = await response.json();

        console.log(json)
        setDetails(json);
      };

    useEffect(() => {

        detailsPokemons()

    }, [])

    if(details === null){return<>NotFound</>}

    return(
        <div className="flex flex-col justify-center items-center pt-2 pb-4  mb-4 rounded-md border-solid border-2 border-red-700 shadow-2xl bg-slate-800 text-white lg:w-1/5">
            <div className="relative h-[200px] w-[200px]">
                <Image src={details.sprites.front_default} alt={details.name} fill />
            </div>
            <p className="my-4 text-xl bg-red-700 rounded-md p-1">#{details.id}</p>
            <h1 className="text-2xl bold mb-3 capitalize">{details.name}</h1>
            <Link className="bg-white text-gray-900 p-2 rounded-md font-semibold transition duration-700 hover:bg-red-700 hover:text-white" href={`/pokemon/${details.id}`}>Detalhes</Link>
        </div>
    )
}