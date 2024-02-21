<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-img src="../assets/img/wordgamepic.jpg"
          width="500" height="400" cover
          class="mx-auto"></v-img>
        <v-card class="mt-5">
          <v-card-title class="justify-center">What's the word?</v-card-title>
          <v-card-text>
            <div v-if="!gameOver">
              <v-card-text class="d-flex align-center justify-center">
              <v-text-field
                v-model="userInput"
                label="Guess the word"
                outlined
                class="mx-auto"
                style="max-width: 400px;"
              ></v-text-field>
              <v-btn color="black" class="mx-auto mt-3" style="margin-bottom: 30px;" @click="checkAnswer">Guess</v-btn>
            </v-card-text>
              <p>{{ currentDefinition }}</p>
            </div>
            <div v-else>
              <p>Spelet är slut! Din poäng: {{ score }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
      words: ['water', 'carrot', 'computer', 'heart','oven', 'bed', 'banana', 'cat', 'car', 'mammoth'],
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
        this.displayMessage('Congratulations! You guessed the right word', true)
        this.fetchDefinition()
      }
      else {
        this.displayMessage('Sorry, the correct word was: ' + this.correctWord, false)
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

<style>
.custom-btn-hover:hover {
  background-color: grey !important;
}</style>
