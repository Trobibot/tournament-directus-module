<template>
	<private-view :title="'Directus Module'">
    <template #navigation>
      <v-list class="nav-list">
        <v-list-group>
          <template #activator>
            <nav-list-item :icon="'group'" :content="'Joueurs'" :href="'#'"/>
          </template>
          <nav-list-item :icon="'person'" :content="'Argan'" :href="'#'"/>
          <nav-list-item :icon="'person'" :content="'Elie'" :href="'#'"/>
          <nav-list-item :icon="'person'" :content="'Romain'" :href="'#'"/>
          <nav-list-item :icon="'person'" :content="'Maxime'" :href="'#'"/>
          <nav-list-item :icon="'person'" :content="'Hugo'" :href="'#'"/>
        </v-list-group>

        <v-list-group>
          <template #activator>
            <nav-list-item :icon="'stadium'" :content="'Tournois'" :href="'#'"/>
          </template>
          <v-list-group>
            <template #activator>
              <nav-list-item :icon="'emoji_events'" :content="'Off Season 2022'" :href="'#'"/>
            </template>
            <v-list-group>
              <template #activator>
                <nav-list-item :icon="'account_tree'" :content="'Spring Season'" :href="'#'"/>
              </template>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <nav-list-item :icon="'account_tree'" :content="'Summer Season'" :href="'#'"/>
              </template>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <nav-list-item :icon="'account_tree'" :content="'Automn Season'" :href="'#'"/>
              </template>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <nav-list-item :icon="'account_tree'" :content="'Winter Season'" :href="'#'"/>
              </template>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
            </v-list-group>
          </v-list-group>

          <v-list-group>
            <template #activator>
              <nav-list-item :icon="'emoji_events'" :content="'Off Season 2023'" :href="'#'"/>
            </template>
            <v-list-group>
              <template #activator>
                <nav-list-item :icon="'account_tree'" :content="'Spring Season'" :href="'#'"/>
              </template>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <nav-list-item :icon="'account_tree'" :content="'Summer Season'" :href="'#'"/>
              </template>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <nav-list-item :icon="'account_tree'" :content="'Automn Season'" :href="'#'"/>
              </template>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
            </v-list-group>
            <v-list-group>
              <template #activator>
                <nav-list-item :icon="'account_tree'" :content="'Winter Season'" :href="'#'"/>
              </template>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <nav-list-item :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
              <navListItem :icon="'sports_soccer'" :content="'Match'" :href="'#'"/>
            </v-list-group>
          </v-list-group>
        </v-list-group>
      </v-list> 
    </template>

    <router-view />

	</private-view>
</template>

<script lang="ts" setup>
import navListItem from '../components/nav-list-item.vue';
</script>

<style>
.v-list {
  padding: 8px 16px !important;
}
</style>