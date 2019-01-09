<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    window.routeT1 = performance.now();
    window.removeSubCount = 0;
    console.log(`Took ${parseInt(window.routeT1 - window.routeT0, 10)} milliseconds.`);
  },
};
</script>
