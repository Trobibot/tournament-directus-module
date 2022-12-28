<template>
  <v-list-item v-if="props.href" :href="props.href">
    <v-list-item-icon><v-icon :name="props.icon" /></v-list-item-icon>
    <v-list-item-content>{{ props.content }}</v-list-item-content>
  </v-list-item>
  <v-list-item v-else>
    <v-list-item-icon><v-icon :name="props.icon" /></v-list-item-icon>
    <v-list-item-content>{{ props.content }}</v-list-item-content>
  </v-list-item>
</template>

<script lang="ts" setup>
interface Props {
  icon:     string,
  content:  string,
  href?:    string
}

const props = defineProps<Props>()
</script>

<style>
.activator .v-list-item {
  padding: 0;
}

</style>