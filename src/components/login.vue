<template>
  <div id="app">
    <el-container style="background-color: white">
      <el-header>
        <div>
          <font size="5px" style="float: left;line-height: 60px">密码登陆</font>
          <div style="margin-right: 0px;float: right;overflow:hidden;border-radius: 80%;width: 60px;height: 60px"><img
            :src="user.pic" width="100%" height="100%"/></div>
        </div>
      </el-header>
    </el-container>
    <div id="middle">
      <br/><br/>
      <form>
        <input name="name" v-model="user.name" type="text" placeholder="用户名/手机号"/><br/><br/><br/>
        <input name="name" v-model="user.pass" type="password" placeholder="请输入密码"/>
        <font id="font"><p>登录即代表阅读并同意《<a href="#">用户协议</a>》和《<a href="#">隐私协议</a>》</p></font><br/>
        <el-button style="width: 300px;height: 30px" type="primary" @click="btn">点击登录</el-button>
      </form>
      <br/>
      <div id="hao">
        <div style="float: left;margin-left: 20px">
          <router-link to="#"><h1>手机验证码</h1></router-link>
        </div>
        <div style="float: right;margin-right: 20px" @click="zhuce()">
         <h1>注册账号</h1>
        </div>
      </div>
    </div>
    <div id="foot">

    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        user: {
          pic: 'http://q1b2m7x30.bkt.clouddn.com/FvkpnABhRLawMBS8utO6hwLsqK3G'
        }
      }
    },
    methods: {
      zhuce:function(){
        this.$router.push('/regist');
      },
      btn: function () {
       /* var user = this.user;*/
        this.$router.push('/main');
        /* axios.post("url").then(res => {
           if (res == 1) {
             /!*登录成功，跳转主页面*!/
           } else {
             alert("密码错误，请重新输入")
           }

         })*/
      }
    }
  }
</script>
<style>
  #middle {
    width: 100%;
    height: 400px;
    /* border: 1px solid red;*/
  }

  #font {
    color: #8c939d;
  }

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

  #foot {
    width: 100%;
    height: 200px;
    position: fixed;
    bottom: 0px;
    border: 1px solid red;
    margin-bottom: 50px;
  }
</style>
<style scope>

  #app {
    width: 100%;
    height: 100%;
    background-color: white;
  }
</style>
