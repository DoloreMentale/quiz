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

    <v-row>
      <v-col>
        <v-btn
            @click.prevent="$router.push({name: 'Result'})"
            :disabled="quizIsNotFinished"
            color="primary"
            block
            large
        >
          Show me results!
        </v-btn>

        <p v-if="quizIsNotFinished" class="error--text mt-3">Please, finish quiz first</p>
      </v-col>
    </v-row>

    <v-row class="mt-15">
      <v-col>
        <h3>Sources</h3>
        <v-divider/>
        <div
            v-for="(source, index) in sources"
            :key="index"
            class="py-2"
        >
          <p>
            {{ index + 1 }}. {{ source.value }}
          </p>

          <a class="text-break" :href="source.url">{{ source.url }}</a>
        </div>
        <v-divider/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import quizHeaderImg from '@/assets/quiz-header-img.jpg'
import sources from "../data/sources";
import Question from "../components/Question";

export default {
  name: 'Quiz',
  components: {Question},
  data: () => ({
    quizHeaderImg,
    sources
  }),
  computed: {
    quiz() {
      return this.$store.getters.quizData
    },
    quizIsNotFinished() {
      return this.quiz.items.some(item => item.passed === false)
    }
  }
}
</script>
