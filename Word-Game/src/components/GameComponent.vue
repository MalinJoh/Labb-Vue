<template>
  <!-- Layout för spel där man gissar vilket ord som definieras  -->
  <v-container class="mt-5">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-img src="../assets/img/wordgamepic.jpg" max-width="100%" height="auto" class="mx-auto"></v-img>
        <v-card class="mt-5">
          <v-card-title class="justify-center">What's the word?</v-card-title>
          <v-card-text> Read the definition below and guess what word it's defining</v-card-text>
          <v-card-text>
            <div v-if="!gameOver">
              <v-card-text class="d-flex align-center justify-center">
              <v-text-field
                v-model="userInput"
                label="Guess the word"
                class="mx-auto"
                @keyup.enter="checkAnswer"
              ></v-text-field>
              <v-btn color="black" class="mx-auto ml-7 mb-5" @click="checkAnswer">Guess</v-btn>
            </v-card-text>
              <p>{{ currentDefinition }}</p>
            </div>
            <div v-else>
              <p>Game is over! Your points: {{ score }}/10</p>
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
    // komponentens dataobjekt med initiala värden
    return {
      currentDefinition: '',
      correctWord: '',
      userInput: '',
      score: 0,
      gameOver: false,
      words: ['water', 'flower', 'carrot', 'computer', 'heart','oven', 'bed', 'banana', 'cat', 'mammoth'],
      currentWordIndex: 0
    }
  },
  methods: {
    // Asynkron funktion för att hämta definitionen för det aktuella ordet från API
    async fetchDefinition() {
      const currentWord = this.words[this.currentWordIndex]
      const response = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${currentWord}?key=4be9eba3-a4f4-4fe1-81c9-ad135e001277`)
      // Extrahera definitionen och det korrekta ordet från API-svaret
      const definition = response.data[0].shortdef[0]
      const word = response.data[0].meta.id
      // Uppdatera komponentens data med den hämtade definitionen och det korrekta ordet
      this.currentDefinition = definition
      this.correctWord = word.split(':')[0]
      // Öka indexet för det aktuella ordet för nästa gång funktionen anropas
      this.currentWordIndex++
      // Kontrollera om spelet är över genom att jämföra indexet med antalet ord
      if(this.currentWordIndex > this.words.length) {
        this.gameOver = true
      }
    },
    // En funktion för att kontrollera användarens svar och hantera resultatet
    checkAnswer() {
      // Jämför användarens inmatning med det korrekta ordet
      console.log(this.correctWord)
      if (this.userInput.toLowerCase() === this.correctWord.toLowerCase()) {
        // Om användaren gissar rätt, öka poängen, visa ett meddelande och hämta nästa ord
        this.score++
        this.displayMessage('Congratulations! You guessed the right word', true)
        this.fetchDefinition()
      }
      else {
        // Om användaren gissar fel, visa det korrekta ordet i ett meddelande och hämta nästa ord
        this.displayMessage('Sorry, the correct word was: ' + this.correctWord, false)
        this.fetchDefinition()
      }
      this.userInput = ''
    },
    // Alert för att visa ett meddelande om antingen lyckat eller misslyckat svar
    displayMessage(message, isSuccess) {
      alert(message, isSuccess)
    }
  },
  // Hämta den första definitionen när komponenten skapas
  created() {
    this.fetchDefinition()
  }
}
</script>

<style>
v-btn {
  background-color: grey;
}</style>
