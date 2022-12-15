import { createPinia, setActivePinia } from 'pinia'
import {InMemoryPokemonGateways} from "../../../adapters/secondary/InMemoryPokemonGateways";
import {listAllPokemons} from "./listAllPokemons";
import {usePokemonStore} from "../../../store/pokemonStore";


describe('List all pokemons', function () {
    let pokemonGateways: InMemoryPokemonGateways
    beforeEach(() => {
        setActivePinia(createPinia())
        pokemonGateways = new InMemoryPokemonGateways()
    })
    it('should have [] when there is no pokemons', async () => {
        await whenListAllPokemons()
        expectPokemonStoreToContains()
    })

    const whenListAllPokemons = async () => {
        await listAllPokemons(pokemonGateways)
    }

    const expectPokemonStoreToContains = (...pokemons: Array<any>) => {
        const pokemonStore = usePokemonStore()
        expect(pokemonStore.items).toEqual(pokemons)
    }
});