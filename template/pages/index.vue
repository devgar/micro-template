<template>
  <section class="container">
    <img src="~assets/img/NuxtMicro.png" alt="Nuxt.js Logo" class="logo" />
    <h1>
      NUXT MICRO TEST
    </h1>
    <ul>
      <li>
        <nuxt-link to="/users" class="button">Users</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  head () { return { title: 'NUXT MICRO TEST' } }
}
</script>

<style scoped>
h1
{
  font-size: 2em;
  margin: 30px 0;
}
ul
{
  list-style: none;
  margin: 0;
  padding: 0;
}
li
{
  margin: 10px 0;
}
</style>
