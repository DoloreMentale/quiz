import Vue from 'vue'
import Vuex from 'vuex'
import quizData from "../data/quiz";

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
  },
  mutations: {
    setQuestionPass: (state, payload) => {
      state.quizData.items.forEach(item => {
        if (item.id === payload.id) item.passed = payload.passed
      })
    },
    setPoints: state => state.pointsCounter++
  },
  state: {
    quizData: quizData,
    pointsCounter: 0
  },
  getters: {
    quizData: state => state.quizData,
    pointsCounter: state => state.pointsCounter
  }
})
