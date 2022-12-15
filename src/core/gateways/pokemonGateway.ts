import { Pokemon } from '../entities/pokemon'

export interface PokemonGateway {
    listAll(): Promise<Array<Pokemon>>
}
