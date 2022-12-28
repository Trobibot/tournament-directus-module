<template>
    <v-info title="Aucun tournoi trouvé" icon="emoji_events" class="center">
        <template v-slot:default>
            Aucun tournoi n’a encore été créé. Commencez par en créer un ci-dessous.
        </template>
        <template v-slot:append>
            <v-button>Créer un tournoi</v-button>
        </template>
    </v-info>
</template>

<script lang="ts" setup>
</script>

<style>
</style>