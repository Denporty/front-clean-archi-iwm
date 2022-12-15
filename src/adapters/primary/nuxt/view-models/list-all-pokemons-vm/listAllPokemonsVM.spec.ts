import {listAllPokemonsVM} from "./listAllPokemonsVM";
import { usePokemonStore} from "../../../../../store/pokemonStore";
import { createPinia, setActivePinia } from 'pinia'

describe('List all pokemons VM', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    it('should return nothing when there is no pokemons', () => {
        const expectedVM: any = {
            items: []
        }
        expect(listAllPokemonsVM()).toEqual(expectedVM)
    })
    it('should return nothing when there is no pokemons', () => {
        const carapuce = {
            id: 'abc123',
            name: 'Carapuce',
            number: 8,
            type: ['eau'],
            attacks: ['pistolet à eau']
        }
        const salameche = {
            id: 'def234',
            name: 'Salameche',
            number: 4,
            type: ['feu'],
            attacks: ['lance flamme']
        }
        const pokemonStore = usePokemonStore()
        pokemonStore.items = [carapuce, salameche]
        const expectedVM: any = {
            items: [
                {
                    id: 'abc123',
                    name: 'CARAPUCE',
                    number: 8,
                    type: ['eau'],
                    attacks: ['pistolet à eau']
                },
                {
                    id: 'def234',
                    name: 'SALAMECHE',
                    number: 4,
                    type: ['feu'],
                    attacks: ['lance flamme']
                }
            ]
        }
        expect(listAllPokemonsVM()).toEqual(expectedVM)
    })
})

