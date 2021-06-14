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

          <a :href="source.url">{{ source.url }}</a>
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
    }
  }
}
</script>
