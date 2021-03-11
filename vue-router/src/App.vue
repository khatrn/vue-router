<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link :to="{ name: 'Foo' }">Foo</router-link>
      <router-link :to="{ name: 'Bar' }">Bar</router-link>
      <router-link :to="{ name: 'UserHome', params: {id: 'foo'}}">Foo-Home</router-link>
      <router-link :to="{ name: 'UserProfile', params: {id: 'foo'}}">Foo-Profile</router-link>
      <router-link :to="{ name: 'UserPost', params: {id: 'foo'}}">Foo-Post</router-link>
    </p>
    <router-view/>
    <ul>
      <li><router-link to="/">Root</router-link></li>
      <li><router-link to="/other">Other</router-link></li>
    </ul>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
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
