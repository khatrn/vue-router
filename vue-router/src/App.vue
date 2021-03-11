<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link :to="{ name: 'Foo' }">Foo</router-link>
      <router-link :to="{ name: 'Bar' }">Bar</router-link>
      <router-link :to="{ name: 'UserHome' }">Foo-Home</router-link>
      <router-link :to="{ name: 'UserProfile'}">Foo-Profile</router-link>
      <router-link :to="{ name: 'UserPost'}">Foo-Post</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
