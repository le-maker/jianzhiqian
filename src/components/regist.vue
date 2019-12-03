<template>

  <div id="app">
    <h1>这是一个注册页面</h1>
    <br>
    <div>
      <form action="#">
        <input name="name"  type="text" placeholder="用户名"/><br/><br/><br/>
        <input name="pass"   type="password" placeholder="请输入密码"/><br/><br/><br/>
        <input  name="pass2" type="text" placeholder="再次输入密码"/><br/><br/><br/>
        <input name="sex" type="text" placeholder="请输入性别"/><br/><br/><br/>
        <input name="phone"  type="text" placeholder="请输入手机号"/><p>
        我已阅读并同意《<a href="#">用户协议</a>》和《<a href="#">隐私协议</a>》</p><br/>
        <el-button style="width: 300px;height: 30px" type="primary" v-on:click="btn()">点击注册</el-button>
      </form>

    </div>
  </div>
</template>

<script>
  export default {
    name: "regist",
    data(){
      /*user:{}*/
    },
    methods:{
      btn:function () {
        this.$router.push("/");
      }
    }
  }
</script>

<style scoped>
  input {
    outline: none;
    height: 50px;
    width: 600px;
    align: center;
    border-bottom: solid 1px gray;
    border-top: none;
    border-left: none;
    border-right: none;
  }
</style>
