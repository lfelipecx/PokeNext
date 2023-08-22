export async function GetPokemons(){
    const maxPokemons = 52
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const response = await fetch(`${api}/?limit=${maxPokemons}`)

    const data = await response.json()

    //add index pokemons
    data.results.forEach((item, index) => {
        item.id = index + 1
    })
    
    //console.log(data.results)
    return data.results
}