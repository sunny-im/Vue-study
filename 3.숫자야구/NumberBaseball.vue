<template>
  <div>
    <h1>{{ result }}</h1>
    <!-- v-on:  ==>  @submit , @submit.prevent로 e.preventDefault()를 생략할 수 있다. -->
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" minlength="4" maxlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도: {{tries.length}}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
// 화면에 보여지는 애가 아닌 컴포넌트와 상관없는 함수라서 methods안에 넣지않음, 넣어도 상관은 없다.
const getNumber = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for(let i = 0; i < 4; i+=1 ) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9-i)), 1)[0];
    array.push(chosen);
  }
  return array;
}  
//
export default {
  data() {
    return {
      answer: getNumber(), // ex) [1,2,3,4]
      tries: [],
      // 같은 변수라도 화면에 보여지는 것은 data
      value: '',
      result: '',
    }
  },
  methods: {
    onSubmitForm(e) {
      // e.preventDefault();
      // value는 문자열이고 answer은 배열이므로 비교할때 join사용
      if(this.value === this.answer.join('')) { // 정답이 맞으면
        this.tries.push({
          try: this.value,
          result: "홈런",
        });
        this.result = "홈런";
        alert('성공, 게임을 다시 시작합니다')
        this.value='';
        this.answer = getNumber();
        this.tries = [];
        this.$refs.answer.focus();
      } else {
        let strike = 0;
        let ball = 0;
        const answerArray = this.value.split('').map(v => parseInt(v));
        for (let i=0; i<4; i+=1) {
          if(answerArray[i] === this.answer[i]) { // 숫자 자릿수까지 맞음
            strike++;
          } else if (this.answer.includes(answerArray[i])) { // 숫자만 맞음
            ball++;
          } else { // 실패
            if(this.tries.length >= 9) { // 10번쨰 시도했을 떄
              this.result = `10번넘게 틀려서 실패! ${this.answer.join(',')}였습니다.`;
              alert('게임을 다시 시작합니다')
              this.value='';
              this.answer = getNumber();
              this.tries = [];
              this.$refs.answer.focus();
            }
          }
        }
        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크, ${ball} 볼 입니다.`
        });
        this.value='';
        this.$refs.answer.focus();
      }
    }
  }
}
</script>