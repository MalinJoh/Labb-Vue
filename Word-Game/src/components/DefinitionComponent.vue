<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-img src="../assets/img/definitionpic.jpg"
          width="500" height="400" cover
          class="mx-auto"></v-img>
        <v-card class="mt-5">
          <v-card-title class="justify-center">Word Definitions</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="searchQuery"
              label="Enter a word"
              outlined
              class="mx-auto"
              style="max-width: 400px;"
            ></v-text-field>
            <v-list>
              <v-list-item v-for="(definition, index) in definitions" :key="index">
                <div class="d-flex flex-column">
                  <div class="text-h6">{{ definition.word }}</div>
                  <div class="text-subtitle-1">{{ definition.meaning }}</div>
                </div>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { watch, ref } from 'vue'
import { dictionarySearch } from '@/store/getDefinition'

const props = defineProps({
  initialWord: String
})
const dictionaryStore = dictionarySearch()
const searchQuery = ref(props.initialWord || '')
const definitions = ref([])

watch(searchQuery, async (newQuery) => {
  if (newQuery && newQuery.trim()) {
    await dictionaryStore.dictionaryFetch(newQuery)
    if (dictionaryStore.currentDefinition) {
      definitions.value = [{ word: newQuery, meaning: dictionaryStore.currentDefinition }]
    }
  } else {
    definitions.value = []
  }
}, { immediate: true })


</script>

<style>
/* Stilar här om det behövs */
</style>
