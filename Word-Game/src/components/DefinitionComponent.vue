<template>
  <!-- Layout och formulär för att söka på ord och få upp definitionerna -->
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-img src="../assets/img/definitionpic.jpg"
          width="500" height="400" cover
          class="mx-auto"></v-img>
        <v-card class="mt-5">
          <v-card-title class="justify-center">Word Definitions</v-card-title>
          <v-card-text>
            Type in a word and get the definition
          </v-card-text>
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
/* importera funktioiner jag kommer att använda från vue, även min fetch med pinia */
import { watch, ref } from 'vue'
import { dictionarySearch } from '@/store/getDefinition'

const props = defineProps({
  initialWord: String
})
// Skapa instans och variabler till sökfunktionen
const dictionaryStore = dictionarySearch()
const searchQuery = ref(props.initialWord || '')
const definitions = ref([])
// En watcher som lyssnar på förändringar i sökfältet
watch(searchQuery, async (newQuery) => {
    // Kontrollera om det finns ett nytt ord i sökfälet som inte bara består av vita tecken
  if (newQuery && newQuery.trim()) {
        // Om det finns en sökfråga, anropa dictionaryFetch-funktionen
    await dictionaryStore.dictionaryFetch(newQuery)
    if (dictionaryStore.currentDefinition) {
      // Om en definition finns, uppdateras definitions-variabeln med en array som innehåller ett objekt med ordet och dess betydelse
      definitions.value = [{ word: newQuery, meaning: dictionaryStore.currentDefinition }]
    }
  } else {
    definitions.value = []
  }
},
//immediate: true för att watch-funktionen omedelbart ska köra när komponenten skapas
{ immediate: true })


</script>
