<template>
  <img 
    src="@/assets/logo.png" 
    alt="HEROPY" />
  <div></div>
  <h1>HelloWorld</h1>
  <el-button @click="handleClick">element button</el-button>
</template>
<script>
console.log(11111111);
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello HelloWorld components'
    }
  },
  methods:{
    handleClick(){
      // console.log(111);
      alert(1212),
      console.log(this.message)
    }
  }
}
</script>
<style scoped lang="scss">
h1{
  color: aquamarine;
}
</style>