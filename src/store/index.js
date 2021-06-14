import Vue from 'vue'
import Vuex from 'vuex'
import quizData from "../data/quiz";

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
  },
  mutations: {
  },
  state: {
    quizData: quizData
  },
  getters: {
    quizData: state => state.quizData
  }
})
