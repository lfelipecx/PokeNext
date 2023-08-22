import Image from "next/image";

export default function About(){
    return(
        <div className="flex justify-center my-20">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-2xl mb-2">Projeto Pokedex em NextJs</h1>
                <p className="mb-3">Projeto criando em NextJs utilizando a API PokeAPI</p>
                <div className="relative w-[400px] h-[400px]">
                    <Image src="/images/charizard.png" alt="Charizard" fill />
                </div>
            </div>           
        </div>
    )
}