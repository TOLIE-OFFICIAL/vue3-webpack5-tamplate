<template>
  <h1>{{ message }}</h1>
  <button @click="handleClick" @mouseenter="handleEnter">阿发</button>
  <HelloWorld />
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'Hello Vue!!111!'
    }
  },
  methods:{
    handleClick(){
      console.log(111);
      // console.log(this.message)
    },
    handleEnter(){
      // console.log(111);
      console.log("enter")
    }
  }
}
</script>

<style lang="scss" scoped>
button:hover{
  background-color: antiquewhite;
}
</style>