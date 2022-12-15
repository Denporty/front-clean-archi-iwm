import { createPinia, setActivePinia } from 'pinia'
import {InMemoryPokemonGateways} from "../../../adapters/secondary/InMemoryPokemonGateways";
import {listAllPokemons} from "./listAllPokemons";
import { Pokemon } from '../../entities/pokemon'
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

    it('should store all products when there is product', async () => {
        const carapuce: Pokemon = {
            id: 'abc123',
            name: 'Carapuce',
            number: 8,
            type: ['eau'],
            attacks: ['pistolet à eau']
        }
        const salameche: Pokemon = {
            id: 'def234',
            name: 'Salameche',
            number: 4,
            type: ['feu'],
            attacks: ['lance flamme']
        }
        pokemonGateways.feedWith(carapuce, salameche)
        await whenListAllPokemons()
        expectPokemonStoreToContains(carapuce, salameche)
    })

    const whenListAllPokemons = async () => {
        await listAllPokemons(pokemonGateways)
    }

    const expectPokemonStoreToContains = (...pokemons: Array<any>) => {
        const pokemonStore = usePokemonStore()
        expect(pokemonStore.items).toEqual(pokemons)
    }
});