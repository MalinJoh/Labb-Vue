<script setup>
import { RouterLink} from 'vue-router';
</script>
<template>
  <v-card  style="margin: 40px; max-width: 300px; ">
    <v-layout>
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          density="compact"
          nav

        >
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="Home"><RouterLink to="/"> Definition </RouterLink></v-list-item>
          <v-list-item prepend-icon="mdi-domain" title="Game" value="Game"> <RouterLink to="/"> Definition </RouterLink>
            <RouterLink to="/Game"> The Game </RouterLink></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 117px "></v-main>
    </v-layout>
  </v-card >
</template>
