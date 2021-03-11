<template>
  <div class="us_nav">
    <router-link to="/settings/email">Email</router-link><br/>
    <router-link to="/settings/profile">Profile</router-link>
  </div>
</template>

<script>
export default {
  name: 'UserSettingsNav'
}
</script>

<style scoped>
.us_nav {
  grid-area: nav;
  border: 1px dotted;
  margin-right: .75rem;
  padding: .3rem;
}
</style>
