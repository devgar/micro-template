{{{{raw}}}}
<template>
  <section class="container">
    <h1>
      USERS
    </h1>
    <ul>
      <li v-for="user in users">
        <nuxt-link :to="{ name: 'users-id', params: { id: user.id }}" class="button">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <form class="post-user" v-on:submit.prevent="postname()">
      <input type="text" v-model="name" class="name" placeholder="Insert a new user"/>
      <input type="submit" class="send" value=">"/>
    </form>
    
    <nuxt-link to="/" class="button">HOME</nuxt-link>
  </section>
</template>
{{{{/raw}}}}
<script>
import axios from '~/plugins/axios'

export default {
  data () {
    return {
      users: [],
      name: ''
    }
  },
  async asyncData () {
    const { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  },
  methods: {
    async postname () {
      if (!this.name) return
      const { data } = await axios.post('/api/users', {name: this.name})
      this.users.push(data)
      this.name = ''
    }
  }
}
</script>

<style scoped>
h1
{
  margin: 30px 0;
}
ul
{
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
}
li
{
  margin: 10px 0;
}
.post-user
{
  width:200px;
  margin: 30px auto;
  max-width: 300px;
  position: relative;
  text-align:left;
}
.post-user .name
{
  color: #999;
  border:none;
  border-bottom: 2px solid #999;
  background-color: #000;
  font-size: 1em;
  text-align: center;
  outline: none;
  margin: 0 2px 0 4px;
  width: 168px;
}
.post-user .name:focus,
.post-user .name:focus + .send,
.post-user .send:focus
{
  color: #fff;
  border-color: #fff;
}
.post-user .send
{
  color: #999;
  border: 2px solid #999;
  background-color: #000;
  padding: 4px 6px;
  cursor: pointer;
  float:right;
}
</style>
