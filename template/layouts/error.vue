{{{{raw}}}}
<template>
  <section class="container error">
    <img src="~assets/img/NuxtMicro.png" alt="NuxtMicro.js Logo" class="logo" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
{{{{/raw}}}}
<script>
export default {
  props: ['error'],
  head () {
    return {
      title: `Error: ${this.error.message}`
    }
  }
}
</script>

<style scoped>

</style>
