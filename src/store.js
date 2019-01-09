import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wtf: 1,
    test: Object.freeze(Array.from(Array(50000)).map(() => ({
      a: 1,
      b: {
        items: [1, 2, {
          items: [1, 2, {
            items: [1, 2, {
              items: [1, 2, {
                items: [1, 2, {
                  items: [1, 2, {
                    items: [],
                  }],
                }],
              }],
            }],
          }],
        }],
      },
    }))),
    //   { a: 1, b: 2, c: 3, d: 4, e: 5 },
    //   { a: 10, b: 20, c: 30, d: 40, e: 50 },
    //   { a: 100, b: 200, c: 300, d: 400, e: 500 },
    //   { a: 1000, b: 2000, c: 3000, d: 4000, e: 5000 },
    //   { a: 10000, b: 20000, c: 30000, d: 40000, e: 50000 },
    // ]),
  },
  mutations: {
    setTest: (state, payload) => {
      Vue.set(state, 'test', payload);
    },

  },
  actions: {
    incrementTest({ state, commit }) {
      const firstOne = { ...state.test[0], a: state.test[0].a + 1 };
      // // .a == Object.entries(state.test[0]).reduce((acc, [key, value]) => ({ ...acc, [key]: value + 1 }), {});
      const [, ...rest] = state.test;
      commit('setTest', Object.freeze([firstOne, ...rest]));
    },
  },
  getters: {
    test(state) {
      return state.test;
    },
    // test2(state, getters) {
    //   return getters.test.map(x => x + 1);
    // },
  },
});
