<template>
  <div id="app">

    <div>

      <h1 style="line-height: 30px;font-size: 23px"> <div style="float: left;width: 10%;height: 30px" id="fan" v-on:click="fan()"><img src="../quanjianzhi/fanhui.jpg" width="100%" height="100%"/></div>我的钱包</h1>
    </div>
    <div style="border: 1px solid red;height: 100px; background-color:red">
      <div style="float:left;margin-left: 10px;margin-top: 15px; font-size: 20px;color: white;">当前金额(RMB)</div>
      <br>
      <div style="margin-top: 40px; ">
        <div style="float:left; margin-left: 10px; font-size: 30px;color: white;">18.00</div>
        <div style="float:right;margin-top: 7px;margin-right: 10px;border: 1px solid white; font-size: 20px;color: white;">提现</div>
      </div>
    </div>
    <div style="height:40px;width:411px;float: left">
    <div style="float: left;margin-left: 60px;color: black;font-size: 20px;line-height: 40px"><a @click="inpay">收入明细</a></div>
    <div style="float: right;margin-right: 60px;color: black;font-size: 20px;line-height: 40px"><a @click="outpay">支出明细</a></div>
    </div>
    <router-view></router-view>
  </div>
</template>
<style scoped>

  a{
    color: #1e2023;
  }
</style>
<script>
  export default {
    name: "qianbao",
    data(){
      return {}
    },
    methods:{
      inpay:function () {
        this.$router.push("/srmx")
      },
      outpay:function () {
        this.$router.push("/zcmx")
      },
      fan:function () {
        this.$router.push("/wode")
      }
    }
  }
</script>

<style scoped>

</style>
