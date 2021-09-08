<template>
  <div>
    <example-component
      :text="text"
    />
    <input type="text" v-model="text">
  </div>
</template>

<script>

import ExampleComponent from '../../components/ExampleComponent/Index.vue';

export default {
  name: 'Main',
  components: {
    "example-component": ExampleComponent
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style src="./scss/_index.scss" lang="scss" scoped></style>