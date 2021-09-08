<template>
  <div>
    <h1 class="h1">
      {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  props: {
    text: {
      type: String,
      default: '',
    }
  }
}
</script>

<style src="./scss/_index.scss" lang="scss" scoped></style>
