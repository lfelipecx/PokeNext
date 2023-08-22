import Image from "next/image";

export async function detailsPokemon (id){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);    
        const json = await response.json();        
        return json
}


export default async function DetailsPokemon({params: {detailsId}}){
    const details = await detailsPokemon(detailsId)
    
    
    return(
        <div className="w-[400px] m-auto mt-5 flex flex-col justify-center items-center">
            <h1 className="w-[400px] p-4 font-bold text-center capitalize text-5xl bg-slate-800 text-white">{details.name}</h1>
            <div className="relative h-[300px] w-[300px]">
                <Image src={details.sprites.front_default} alt={details.name} fill />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-lg">Número:</h3>
                <p>#{details.id}</p>
            </div> 
            <div className="flex flex-col justify-center items-center mt-2">
                <h3 className="font-bold text-lg m-1">Tipo:</h3>
                <div className="flex gap-2">
                    {details.types.map((item, index) => (
                        <span className="bg-black text-white py-1 px-3 uppercase rounded" key={index}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className="flex gap-3 mt-5">
                <div className="flex flex-col justify-center items-center">
                    <h4 className="font-bold">Altura:</h4>
                    <p>{details.height * 10} cm</p>
                </div>
                <div className=" border-r-2"></div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="font-bold">Peso:</h4>
                    <p>{details.weight / 10} kg</p>
                </div>
            </div>           
        </div>
    )
}