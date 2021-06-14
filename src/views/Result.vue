<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center primary--text">
        <div>
          <h2 class="display-1">Result!</h2>
          <h2 class="display-1">You final score is ...</h2>
          <h1 id="points" class="display-4">{{ pointsCounter }} {{ pointsCounter === 1 ? 'point' : 'points' }}</h1>
        </div>

        <div class="ma-15">
          <p v-if="pointsCounter >= 0 && pointsCounter <= 3">
            You did not pass this quiz. Read our comments, read literature in the resource part and be ready do your
            best next time! But…health literacy police will probably want to talk with you. So, hurry up to show better
            result ;)
          </p>

          <p v-if="pointsCounter >= 4 && pointsCounter <= 7">
            Good result, but still far away from what health literacy police expect from you!
          </p>

          <p v-if="pointsCounter >= 8 && pointsCounter <= 10">
            You are marvelous! We have a tempting offers for you. The first one is the following: Will you become a part of health literacy police? If not, we have another one! Would you teach fellow countrymen health literacy?
          </p>
        </div>

        <v-btn
            @click.prevent="$router.push({ name: 'Quiz' })"
            large
            color="primary"
            class="mt-5"
        >
          Back to quiz!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Result",
  computed: {
    pointsCounter() {
      return this.$store.getters.pointsCounter
    }
  }
}
</script>

<style scoped>
#points {
  animation: delayed 5s;
}

@keyframes delayed {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
