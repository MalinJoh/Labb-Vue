import { defineStore } from 'pinia'
import axios from 'axios'

export const dictionarySearch = defineStore('definition', {
  state: () => ({
    currentDefinition: '',
    correctWord: ''
  }),
  actions: {
    async dictionaryFetch(word) {
      try {
        const response = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=4be9eba3-a4f4-4fe1-81c9-ad135e001277`)
        if (response.data.length && response.data[0].meta) {
          this.currentDefinition = response.data[0].shortdef[0]
          this.correctWord = response.data[0].meta.id.split(':')[0]
        } else {
          this.currentDefinition = 'No defintion was found'
          this.correctWord = ''
        }
      } catch (error) {
        console.error('Not able to fetch data', error)
      }
    }
  }
})
