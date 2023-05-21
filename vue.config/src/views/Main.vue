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
  // beforeCreated, created는 DOM 접근 전!
  beforeCreated() {
    console.log(1);
  },
  created() {
    console.log(2);
  },
  // 탬플릿 영역안에서 호출하는 애들 (어디선가 무조건 호출이 되어야함))
  computed: {
    // sync의 첫번쨰 인자값은 파일이름
    ...sync('index',[
      'lists',  // 선언한 변수이름
    ])
  },
  // 호출하지 않아도 실행, 감지되면 실행? (react useEffect의 두번째 인자 배열 같은 느낌?)
  watch: {

  },
  // beforeMount, mounted는 DOM 접근 후, 초기 셋팅 사용가능
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
  // 현재 컴포넌트에서만 발생 (ex. 바닐라자바스크립트 이벤트리스너 사용 시 , vue3에서는 unmounted)
  destroyed() {

  }
}
</script>