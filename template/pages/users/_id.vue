{{{{raw}}}}
<template>
  <section class="container">
    <img :src="image()" :alt="`${user.name}'s photo`" class="user-photo" />
    <h1 class="title">#{{ user.id }}</h1>
    <h2 class="info">{{ user.name }}</h2>
    <nuxt-link class="button" to="/users">Users</nuxt-link>
  </section>
</template>
{{{{/raw}}}}
<script>

import axios from '~/plugins/axios'

export default {
  name: 'id',
  data () {
    return {
      user: {}
    }
  },
  async asyncData (context) {
    try {
      const { data } = await axios.get('/api/users/' + context.params.id)
      return { user: data }
    } catch (e) {
      context.error({ statusCode: e.response.status, message: e.response.data })
    }
  },
  head () {
    return {
      title: `User: ${this.user.name}`
    }
  },
  methods: {
    image () {
      if (this.user.id) {
        return `/img/profile${this.user.id % 3}.svg`
      }
    }
  }
}
</script>

<style scoped>
.user-photo
{
  width:200px;
  height:200px;
  border-radius: 50%;
}
</style>
