<template>
  <button>{{ label }}</button>
  <!-- <RouterLink :to="link">
    <button>{{ label }}</button>
  </RouterLink> -->
</template>

<script>
export default {
  name: 'Link',
  props: {
    label: String,
    link: Object,
  },
};
</script>
