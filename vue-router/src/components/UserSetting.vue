<template>
  <div class="us">
      <h2>User Setting</h2>
      <UserSettingsNav/>
      <router-view class="us__content"></router-view>
      <router-view name="helper" class="us__content us__content--helper"></router-view>
  </div>
</template>

<script>
import UserSettingsNav from './UserSettingsNav'
export default {
  name: 'UserSetting',
  components: {
    UserSettingsNav
  }
}
</script>

<style scoped>
.us {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "nav content"
    "nav helper";
}

.us__content {
  grid-area: content;
}
.us__content--helper {
  grid-area: helper;
}

h2 {
  grid-area: header;
}
</style>
