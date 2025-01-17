<script setup>
import NavBar from './components/NavBar.vue';
import { useDisplay } from 'vuetify'; // Import Vuetify composable

const { xsOnly } = useDisplay(); // Access breakpoint
</script>

<template>
  <v-app>
    <!-- Responsive Navigation Drawer -->
    <v-navigation-drawer app :temporary="xsOnly" permanent>
      <NavBar />
    </v-navigation-drawer>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align:center justify="center">
          <v-col cols="12" sm="20" md="20">
            <!-- Router View -->
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
