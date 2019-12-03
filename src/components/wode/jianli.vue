<template>
  <div id="app">
    <div id="title">
      <div id="fan" v-on:click="fan()"><img src="../quanjianzhi/fanhui.jpg" width="100%" height="100%"/></div>
      <h1>修改简历</h1>
    </div>
    <div id="body">
      <div class="tu">
        <div class="toubu1">
          <img
            :src="user.pic" width="100%" height="100%"/>
        </div>
        <p style="margin-top:-4px;font-size: 16px;font-weight: bold">手机号：13892968992</p>
      </div>
    </div>
    <hr style="border: 1px solid gainsboro;"/>
    <div id="foot">
      <div class="tiao" @click="self()">
        <p style="line-height:50px;font-size: 19px;font-weight: bold">修改个人信息</p>
      </div>
      <div class="tiao" @click="jian()">
        <p style="line-height:50px;font-size: 19px;font-weight: bold"> 修改简历</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "jianli",
    data() {
      return {
        user: {
          pic: 'http://q1b2m7x30.bkt.clouddn.com/FvkpnABhRLawMBS8utO6hwLsqK3G',
          name: '乐乐',
          phone: '13892968992',
          money: '18.00',
          jianli: '30%',
          jifen: '100'
        }
      }
    },
    methods: {
      fan: function () {
        this.$router.push("/wode")
      },
      self: function () {
        this.$router.push("/selxin")
      },
      jian:function () {
        this.$router.push("/jian")
      }
    }

  }
</script>

<style scoped>
  #title {
    margin-top: -40px;
    /*border: 1px solid red;*/
    width: 100%;
    height: 100px;
  }

  #body {
    /* border: 1px solid red;*/
    width: 100%;
    height: 260px;
  }

  #foot {
    /* border: 1px solid red;*/
    width: 100%;
    height: 300px;
  }

  #fan {
    float: left;
    /*border: 1px solid red;*/
    height: 80%;
    width: 10%;
  }

  .tu {
    /*border: 1px solid red;*/
    height: 100%;
    width: 40%;
    margin: 0 auto;

  }

  .toubu1 {
    /*border: 1px solid red;*/
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
  }

  .tiao {
    /* border: 1px solid red;*/
    width: 100%;
    height: 30%;
    background-color: gainsboro;
  }
</style>
