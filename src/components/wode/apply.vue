<template>
  <div id="app">
    <div style="float: left;width: 10%;height: 30px" id="fan" v-on:click="fan()"><img src="../quanjianzhi/fanhui.jpg" width="100%" height="100%"/></div>
    <div style="font-size: 20px">{{msg}}<br>
      <hr style="border: #8c939d 0.5px solid; color:gray"/>
      <div style="height: 18px;margin-top:10px;line-height: 18px;font-size: 16px">
        <div style="float: left;margin-left: 15px"><a @click="all">全部</a></div>
        <div style="float: left;margin-left: 38px"><a @click="bm1">已报名</a></div>
        <div style="float: left;margin-left: 38px"><a @click="ly2">已录用</a></div>
        <div style="float: left;margin-left: 38px"><a @click="dg3">已到岗</a></div>
        <div style="float: right;margin-right: 15px"><a @click="js4">已结算</a></div>

      </div>
      <hr style="border: #8c939d 1px solid; color:gray"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "apply",
    data() {
      return {
        msg: "我的申请"
      }
    }, methods: {
      all: function () {
        this.$router.push("/all")
      },
      bm1: function () {
        this.$router.push("/bm1")
      },
      ly2: function () {
        this.$router.push("/ly2")
      },
      dg3: function () {
        this.$router.push("/dg3")
      },
      js4: function () {
        this.$router.push("/js4")
      },
      fan:function () {
        this.$router.push("/wode")
      }
    }
  }
</script>

<style scoped>
  a {
    color: black;
  }
</style>
