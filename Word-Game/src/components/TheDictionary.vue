<template>
  <div>
  <div>
    <h1>Home</h1>
    <p>On this </p>
  </div>
    <div>
      <h2>Word Defintions</h2>
      <input v-model="searchQuery" placeholder="Enter a word">
    <button @click="fetchDefinitions">Search</button>
      <ul>
        <li v-for="(definition, index) in definitions" :key="index">
          {{ definition.word }}: {{ definition.meaning }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { dictionarySearch } from '@/store/dictionary'

export default {
  setup() {
const searchQuery = ref('');
const dictionaryStore = dictionarySearch();
const definitions = ref([]);

const fetchDefinitions = async () => {
  await dictionaryStore.dictionaryFetch(searchQuery.value);
  if (dictionaryStore.currentDefinition) {
    definitions.value = [{ word: searchQuery.value, meaning: dictionaryStore.currentDefinition }];
  }
};
}
}


</script>

<style>
/* Stilar här om det behövs */
</style>
