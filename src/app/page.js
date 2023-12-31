import Image from "next/image"

import { GetPokemons } from "../services/getPokemons"
import Card from "../components/Card"

export default async function Home() {
  const pokemons = await GetPokemons()
  return (
    <div>
      <div className="flex items-center justify-center gap-2 my-8">
        <h1 className="text-red-500 text-5xl font-bold">Poke<span className="text-slate-800">Next</span></h1>
        <div className="relative h-[50px] w-[50px]">          
          <Image src="/images/pokeball.png" alt="pokebola" fill />
        </div>
      </div>
      
      <div className="flex flex-col mx-3 lg:flex-row lg:flex-wrap lg:justify-evenly lg:gap-5">
       
          {pokemons?.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />           
          ))}
        
      </div>
      
    </div>
  )
}
