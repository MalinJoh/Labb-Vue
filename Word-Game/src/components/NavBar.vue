<script setup>
import { RouterLink } from 'vue-router';
import { useDisplay } from 'vuetify';

const { xsOnly } = useDisplay();
</script>

<template>
  <!-- Top Navbar -->
  <v-app-bar app flat>
    <v-toolbar-title>Your Definition Page</v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- Links for Desktop -->
    <template v-if="!xsOnly">
      <v-btn text>
        <RouterLink to="/" style="color: inherit;">Definition</RouterLink>
      </v-btn>
      <v-btn text>
        <RouterLink to="/Game" style="color: inherit;">The Game</RouterLink>
      </v-btn>
    </template>

    <!-- Hamburger Menu for Mobile -->
    <template v-else>
      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer v-if="xsOnly" v-model="drawer" app temporary>
    <v-list nav dense>
      <v-list-item>
        <RouterLink to="/" style="color: inherit;">Definition</RouterLink>
      </v-list-item>
      <v-list-item>
        <RouterLink to="/Game" style="color: inherit;">The Game</RouterLink>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
