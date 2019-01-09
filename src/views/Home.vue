<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  mounted() {
    window.routeT1 = performance.now();
    window.removeSubCount = 0;
    console.log(`Took ${parseInt(window.routeT1 - window.routeT0, 10)} milliseconds.`);
  },
};
</script>
