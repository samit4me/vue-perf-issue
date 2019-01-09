<template>
  <div>
    <div
      v-for="i of Array.from(Array(10).keys())"
      :key="i"
    >
      <div
        v-for="j of Array.from(Array(100).keys())"
        :key="j"
      >
        <Link
          :link="{ name: 'page-one' }"
          :label="`Page One ${i} - ${j}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTwo',
  components: {
    Link: () => import('@/components/Link.vue'),
  },
  mounted() {
    window.routeT1 = performance.now();
    window.removeSubCount = 0;
    console.log(`Took ${parseInt(window.routeT1 - window.routeT0, 10)} milliseconds.`);
  },
};
</script>
