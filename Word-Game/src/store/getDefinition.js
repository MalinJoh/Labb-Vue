// Pinia store för definitionshämtning
import { defineStore } from 'pinia'
import axios from 'axios'
// Exportera en instans av en Pinia-store med namnet 'dictionarySearch'
export const dictionarySearch = defineStore('definition', {
  state: () => ({
    currentDefinition: '',
    correctWord: ''
  }),
  actions: {
    // Asynkron hämtning av definitionen för ett givet ord
    async dictionaryFetch(word) {
      try {
        const response = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=4be9eba3-a4f4-4fe1-81c9-ad135e001277`)
        // Kontrollera om det finns svar från API:et för det angivna ordet
        if (response.data.length && response.data[0].meta) {
          // Extrahera definitionen och det korrekta ordet från API-svaret
          this.currentDefinition = response.data[0].shortdef[0]
          this.correctWord = response.data[0].meta.id.split(':')[0]
        } else {
          // Om ingen definition hittades, uppdatera pinia-store tillstånd med ett meddelande om att ingen definition hittades
          this.currentDefinition = 'No defintion was found'
          this.correctWord = ''
        }
      } catch (error) {
        //Om hämtningen misslyckas så loggas felet till konsolen
        console.error('Not able to fetch data', error)
      }
    }
  }
})
