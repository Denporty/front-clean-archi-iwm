import { defineStore } from 'pinia'
import { Pokemon } from '../core/entities/pokemon'

export const usePokemonStore = defineStore('PokemonStore', {
    state: () => {
        return {
            items: [] as Array<Pokemon>
        }
    },
    actions: {
        list(products: Array<Pokemon>) {
            this.items = products
        },
    }
})
