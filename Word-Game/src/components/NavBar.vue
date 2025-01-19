<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <!-- Top Navbar -->
  <v-app-bar app flat>
    <v-toolbar-title>Your Definition Page</v-toolbar-title>
    <v-spacer></v-spacer>

        <!-- Links for Desktop -->
        <v-btn text>
          <RouterLink to="/" style="color: inherit;">Definition</RouterLink>
        </v-btn>
        <v-btn text>
          <RouterLink to="/Game" style="color: inherit;">The Game</RouterLink>
        </v-btn>
      </v-app-bar>
    </template>


<style scoped>
/* Ensure the app bar doesn't take excessive space */
.v-app-bar {
  background-color: #fff;
  color: #000;
}

.v-btn {
  font-size: 1rem;
}
</style>
