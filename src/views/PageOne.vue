<template>
  <div>
    <!-- <div
      v-for="(obj, i) in test"
      :key="i"
    > -->
      <div>a: {{ test[0].a }}</div>
    <!-- </div> -->
    <!-- {{ tt }} -->
    <!-- {{ test }} -->
    <!-- {{ test }}
    {{ test2 }}
    {{ test3 }} -->
    <div
      v-for="i in [1, 2]"
      :key="i.key"
    >
    <!-- <Link
      :link="{ name: 'page-two' }"
      label="Page Two"
    /> -->
      <button>{{ i }}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'PageOne',
  data() {
    return {
      // a: Object.freeze({ a: 'a', b: 'b', c: 'c' }),
      // tt: Object.freeze(this.$store.state.test),
      // test: this.$store.state.test,
      // test2: [2],
      // test3: [3],
      // stuff: Object.freeze(Array.from(Array(10).keys()).map(key => ({ key }))),
    };
  },
  // components: {
  //   Link: () => import('@/components/Link.vue'),
  // },
  computed: {
    ...mapGetters(['test']),
    // ...mapState({
    //   test: state => state.test,
    // }),
  },
  mounted() {
    window.routeT1 = performance.now();
    window.removeSubCount = 0;
    console.log(`Took ${parseInt(window.routeT1 - window.routeT0, 10)} milliseconds.`);
  },
};
</script>
