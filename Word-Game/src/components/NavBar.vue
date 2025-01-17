<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useDisplay } from 'vuetify'; // Import Vuetify composable

const drawer = ref(false);
const { xsOnly } = useDisplay(); // Access breakpoint for responsiveness
</script>

<template>
  <v-app>
    <!-- App Bar for small screens -->
    <v-app-bar flat app>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>Word Game</v-toolbar-title>
    </v-app-bar>

    <!-- Responsive Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      :temporary="xsOnly"
      permanent
    >
      <v-list nav dense>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Definition">
          <RouterLink to="/" style="color: inherit;">Definition</RouterLink>
        </v-list-item>
        <v-list-item prepend-icon="mdi-gamepad-variant" title="Game">
          <RouterLink to="/Game" style="color: inherit;">The Game</RouterLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<style scoped>
/* Optional styles for better responsiveness */
.v-navigation-drawer {
  max-width: 250px;
}

.v-app-bar {
  background-color: #fff;
  color: #000;
}

.v-list-item {
  font-size: 1rem;
}
</style>
