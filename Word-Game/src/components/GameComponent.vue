<template>
  <div>
    <h1>Ordkunskapsspel</h1>
    <div v-if="!gameOver">
      <p>{{ currentDefinition }}</p>
      <input v-model="userInput" type="text" placeholder="Gissa ordet">
      <button @click="checkAnswer">Gissa</button>
    </div>
    <div v-else>
      <p>Spelet är slut! Din poäng: {{ score }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      currentDefinition: '',
      correctWord: '',
      userInput: '',
      score: 0,
      gameOver: false,
      words: ['oven', 'bed', 'banana', 'cat', 'test'],
      currentWordIndex: 0
    }
  },
  methods: {
    async fetchDefinition() {
      const currentWord = this.words[this.currentWordIndex]
      const response = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${currentWord}?key=4be9eba3-a4f4-4fe1-81c9-ad135e001277`);
      const definition = response.data[0].shortdef[0]
      const word = response.data[0].meta.id
      this.currentDefinition = definition
      this.correctWord = word.split(':')[0]
      this.currentWordIndex++
      if(this.currentWordIndex > this.words.length) {
        this.gameOver = true
      }
    },
    checkAnswer() {
      console.log(this.correctWord)
      if (this.userInput.toLowerCase() === this.correctWord.toLowerCase()) {
        this.score++
        this.displayMessage('Grattis, det var rätt svar!', true)
        this.fetchDefinition()
      }
      else {
        this.displayMessage('Tyvärr, det var fel svar.', false)
        this.fetchDefinition()
      }
      this.userInput = ''
    },
    displayMessage(message, isSuccess) {
      alert(message, isSuccess)
    }
  },
  created() {
    this.fetchDefinition()
  }
}
</script>
