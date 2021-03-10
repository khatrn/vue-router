<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/foo">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
      <router-link to="/user/foo">Foo-Home</router-link>
      <router-link to="/user/foo/profile">Foo-User</router-link>
      <router-link to="/user/foo/post">Foo-Post</router-link>
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
