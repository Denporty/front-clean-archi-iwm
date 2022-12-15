import {usePokemonStore} from "../../../../../store/pokemonStore";

export interface ListAllPokemonsItemVM {
    id: string
    name: string
    type: Array<string>
    attacks: Array<string>
    number: number
}

export interface ListAllPokemonsVM {
    items: Array<ListAllPokemonsItemVM>
}

export const listAllPokemonsVM = (): ListAllPokemonsVM => {
    const pokemonStore = usePokemonStore()
    return {
        items: pokemonStore.items.map(pokemon => {
            return {
                id: pokemon.id,
                name: pokemon.name.toUpperCase(),
                number: pokemon.number,
                type: pokemon.type,
                attacks: pokemon.attacks
            }
        })
    }
}
