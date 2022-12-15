<template>
  <h1>Coucou</h1>
  <div v-for="pokemon in allPokemonsVM.items" :key="pokemon.id">
    <div>{{pokemon.name}}: {{pokemon.number}}</div>
    <p v-for="type in pokemon.type">
      {{ type }}
    </p>
    <p v-for="attack in pokemon.attacks">
      {{ attack }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from '../../../../../.nuxt/imports'
import { listAllPokemons } from '../../../../core/usecases/list-all-pokemons/listAllPokemons'
import {listAllPokemonsVM} from "../view-models/list-all-pokemons-vm/listAllPokemonsVM";
import pokemonGateway from "../../../../../dependencies/pokemonGateways";

onMounted(() => {
  listAllPokemons(pokemonGateway)
})

const allPokemonsVM = computed(() => {
  return listAllPokemonsVM()
})

</script>
