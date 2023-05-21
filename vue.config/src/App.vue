<template>
  <div id="app">
    <Navi/>
    <router-view/>
  </div>
</template>
<script>
import Navi from '@/components/Nav/index.vue'
export default {
  components: {
    Navi,
  }
}
</script>
