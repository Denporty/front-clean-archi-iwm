import {Pokemon} from "../../core/entities/pokemon";
import {PokemonGateway} from "../../core/gateways/pokemonGateway";


export class InMemoryPokemonGateways implements PokemonGateway {
    private pokemons: Array<Pokemon> = []

    listAll(): Promise<Array<Pokemon>> {
        return Promise.resolve(this.pokemons)
    }

    feedWith(...pokemons: Array<Pokemon>) {
        this.pokemons = pokemons
    }
}
