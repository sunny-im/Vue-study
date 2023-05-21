<template>
  <div class="nav">
    <div
      v-for="(cate, index) in navList"
      :key="index"
      @click="changePage(cate.path)"
    >
      {{ cate.name }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: '메인페이지',
          value: 'main',
          path: '/'
        },
        {
          name: '리스트1',
          path: 'list'
        },
        {
          name: '리스트2',
          path: 'list'
        },
        {
          name: '리스트3',
          path: 'list'
        },
        {
          name: '리스트4',
          path: 'list'
        },
      ]
    }
  },
  methods: {
    changePage(path) {
      // if(this.$route.params.manage !== path) {
        this.$router.push({path: `/${path}`})
      // }
    }
  }
}
</script>
<style>
  .nav {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 40px;
  }

  .nav > div {
    cursor: pointer;
    transition: all 0.5s;
    font-size: 14px;
    color: black;
  }
  .nav > div:hover {
    font-size: 20px;
    color: red;
  }
</style>