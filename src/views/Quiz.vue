<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1 class="text-center primary--text my-3">{{ quiz.metadata.title }}</h1>
        <v-img :src="quizHeaderImg"/>
      </v-col>
    </v-row>

    <Question
        v-for="(question, index) in quiz.items"
        :key="index"
        :question="question"
    />
  </v-container>
</template>

<script>
import quizHeaderImg from '@/assets/quiz-header-img.jpg'
import Question from "../components/Question";

export default {
  name: 'Quiz',
  components: {Question},
  data: () => ({
    quizHeaderImg
  }),
  computed: {
    quiz() {
      return this.$store.getters.quizData
    }
  }
}
</script>
