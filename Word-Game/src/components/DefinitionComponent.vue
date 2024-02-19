<template>
  <div>
  <div>
    <h1>Home</h1>
    <p>On this </p>
  </div>
    <div>
      <h2>Word Defintions</h2>
      <input v-model="searchQuery" placeholder="Enter a word">
      <ul>
        <li v-for="(definition, index) in definitions" :key="index">
          {{ definition.word }}: {{ definition.meaning }}
      </li>
      </ul>
    </div>
  </div>
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
    await dictionaryStore.dictionaryFetch(newQuery);
    if (dictionaryStore.currentDefinition) {
      definitions.value = [{ word: newQuery, meaning: dictionaryStore.currentDefinition }];
    }
  } else {
    definitions.value = [];
  }
}, { immediate: true });


</script>

<style>
/* Stilar här om det behövs */
</style>
