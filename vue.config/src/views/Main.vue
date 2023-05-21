<template>
  <div>
    <div v-if="isLoaded">
      {{ listData }}
    </div>
    <div v-else>로딩중입니다</div>
  </div>
</template>
<script>
import axios from 'axios';
import { sync,get } from 'vuex-pathify'

export default {
  props: {

  },
  components: {

  },
  beforeCreated() {
    console.log(1);
  },
  created() {
    console.log(2);
  },
  computed: {
    // sync의 첫번쨰 인자값은 파일이름
    ...sync('index',[
      'lists',  // 선언한 변수이름
    ])
  },
  beforeMount() {

  },
  async mounted() {
    //방법1
    // const result = await axios.get('https://infuser.odcloud.kr/api/stages/37834/api-docs?1649750139545')
    // console.log(result);

    //방법2
    // await axios.get('https://infuser.odcloud.kr/api/stages/37834/api-docs?1649750139545')
    // .then(res => {
    //   console.log(res)
    //   if(res.status === 200) {
    //     this.listData = res.request
    //   }
    // })
    // .catch (err => console.log(`error => ${err}`))
    // console.log('1', this.listData);
    
    await this.getData();

    // // 방대한 양의 데이터가 string으로 만들어져있는 경우
    // console.log(this.listData.response);
    // // string to JSON
    // const parsingData = JSON.parse(this.listData.response);
    // console.log('2',parsingData);
    // // JSON to String
    // const textData = JSON.stringify(parsingData);
    // console.log('3',textData)
  },
  data: () => ({
    isLoaded: false,
    listData: null,
    parsingData: null,
  }), 
  methods: {
    async getData() {
      await axios.get('https://infuser.odcloud.kr/api/stages/37834/api-docs?1649750139545')
    .then(res => {
      console.log(res)
      if(res.status === 200) {
        this.listData = res.request
        this.setParsingData()
      }
    })
    .catch (err => console.log(`error => ${err}`))
    console.log('1', this.listData);
    this.isLoaded = true
    },
    setParsingData() {
      this.parsingData = JSON.parse(this.listData.response)
      console.log('parsingData',this.parsingData)
    }, 
  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  }
}
</script>