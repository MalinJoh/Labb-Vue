<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <v-app>
    <!-- Top Navbar -->
    <NavBar />

    <!-- Main Content -->
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
