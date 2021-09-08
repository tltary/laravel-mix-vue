<template>
  <div>
    <div>
      <router-link to="/">Main</router-link>
      <router-link to="/second">Second</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style src="./scss/app.scss" lang="scss"></style>
