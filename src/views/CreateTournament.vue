<template>
  <v-info v-if="state === TournamentState.pending" title="Aucun tournoi trouvé" icon="emoji_events" class="center">
    <template v-slot:default>
      Aucun tournoi n’a encore été créé. Commencez par en créer un ci-dessous.
    </template>
    <template v-slot:append>
      <v-button @click="initTournamentCreation">Créer un tournoi</v-button>
    </template>
  </v-info>

  <div class="form-wrapper" v-if="state === TournamentState.initialized">
    <v-form :fields="bracketField" v-model="formModel" />
    <v-button @click="createTournament">Créer un tournoi</v-button>
  </div>

  <p v-if="state === TournamentState.created">{{ tournament }}</p>
</template>

<script lang="ts" setup>
import { useApi, useStores } from '@directus/extensions-sdk';
import { ref } from 'vue';
import Tournament from '../utils/classes/tournament.class';
import { TournamentState } from '../utils/enums/tournamentState.enum';

const api = useApi();
const stores = useStores();

const state = ref(TournamentState.pending);
const bracketField = stores.useFieldsStore().getFieldsForCollection('tournament').filter(({field}) => ["players", "name"].includes(field))

let tournament = ref()
let formModel = ref();

function initTournamentCreation() {
  state.value = TournamentState.initialized
}

async function createTournament() {
  console.log("file: CreateTournament.vue:48 :: formModel", formModel)

  const { data: { data } } = await api.post(
    'http://localhost:8066/items/tournament',
    formModel
  );
  state.value = TournamentState.created
  tournament.value          = new Tournament(data.id)
  tournament.value.name     = data.name
  tournament.value.players  = data.players
}
</script>

<style>
</style>