<template>
  <v-app>
    <v-fade-transition mode="out-in">
      <router-view></router-view>
    </v-fade-transition>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  overflow: auto !important;
}
</style>
