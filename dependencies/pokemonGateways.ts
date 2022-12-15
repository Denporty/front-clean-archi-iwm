import { InMemoryPokemonGateways } from '../src/adapters/secondary/InMemoryPokemonGateways'
import { Pokemon } from '../src/core/entities/pokemon'

const pokemonGateway = new InMemoryPokemonGateways()
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
pokemonGateway.feedWith(carapuce, salameche)
export default pokemonGateway
