<template>
  <v-row>
    <v-col>
      <v-sheet class="my-3 pa-5" outlined rounded>
        <v-row>
          <v-col cols="12" sm="6">
            <h3 class="mb-10 primary--text">
              {{ question.id + 1 }}. {{ question.title }}
            </h3>
            <div
                v-for="(choice, index) in question.choices"
                :key="index"
            >
              <v-checkbox
                  class="pa-0 ma-0"
                  v-model="choice.selected"
                  off-icon="mdi-checkbox-blank-circle-outline"
                  on-icon="mdi-checkbox-blank-circle"
                  :color="choice.isCorrect ? 'success' : 'error'"
                  :label="choice.value"
                  :disabled="hideCheckboxes"
              >
              </v-checkbox>
              <span
                  v-if="hideCheckboxes && choice.isCorrect"
                  class="success--text"
              >
            <v-icon color="success">mdi-check</v-icon>
            {{ choice.caption }}
          </span>
              <span
                  v-if="choice.selected && !choice.isCorrect"
                  class="error--text"
              >
            <v-icon color="error">mdi-close</v-icon>
            {{ choice.caption }}
          </span>
              <v-spacer  class="mb-5"/>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <v-img transition :src="question.img" />
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: {
      type: Object
    }
  },
  computed: {
    hideCheckboxes() {
      return this.question.choices.some(choice => choice.selected === true)
    }
  }
}
</script>
