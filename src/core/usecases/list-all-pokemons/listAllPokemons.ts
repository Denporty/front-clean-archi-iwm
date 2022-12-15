import { usePokemonStore } from '../../../store/pokemonStore'
import {PokemonGateway} from "../../gateways/pokemonGateway";

export const listAllPokemons = async (pokemonGateway: PokemonGateway) => {
    const products = await pokemonGateway.listAll()
    const productStore = usePokemonStore()
    productStore.list(products)
}
