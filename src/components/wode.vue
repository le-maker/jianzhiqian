<template>
  <div id="app">
    <div id="head">
      <div class="toubu1">
        <div style="float: left;margin-left: 14px;margin-top: 15px">
          <font size="5px" weight="bold">{{user.name}}</font>
          <p style="margin-top: -2px">{{user.phone}}</p></div>

      </div>
      <div class="toubu1" style="float: right;width: 20% ;margin-right: 20px;border-radius: 50%">
        <img
          :src="user.pic" width="100%" height="100%"/>
      </div>
    </div>
    <br/>
    <hr style="border: 1px solid gainsboro;"/>
    <!--<h1>这是我的详情</h1>-->
    <div id="headnext">
      <div class="n1">
        <router-link to="/qianbao" style=" text-decoration:none;color: #8c939d;font-weight: bolder"><font color="red">{{user.money}}元</font><br/>
        <span style="font-size: 15px">&nbsp;钱包提现</span></router-link>
      </div>
      <div class="n1">
        <router-link style=" text-decoration:none;color: #8c939d;font-weight: bolder" to="/jianli"><font color="red">{{user.jianli}}元</font><br/>
       <span style="font-size: 15px">&nbsp;我的简历</span></router-link></div>
      <div class="n1"> <router-link to="/jifen" style=" text-decoration:none;color: #8c939d;font-weight: bolder"><font color="red">{{user.jifen}}元</font><br/>
        <span style="font-size: 15px">&nbsp;信誉积分</span></router-link></div>
    </div>
    <hr style="border: 1px solid gainsboro;"/>
    <p style="margin-left: 10px;font-size: 14px">我的兼职</p>
    <div id="middle">
      <div class="jian1">
        <div class="img"><img :src="user.pic" width="100%" height="100%"/></div>
        <div style="font-size: 15px">已报名</div>
      </div>
      <div class="jian1">
        <div class="img"><img :src="user.pic" width="100%" height="100%"/></div>
        <div style="font-size: 15px">已录用</div>
      </div>
      <div class="jian1">
        <div class="img"><img :src="user.pic" width="100%" height="100%"/></div>
        <div style="font-size: 15px">已到岗</div>
      </div>
      <div class="jian1">
        <div class="img"><img :src="user.pic" width="100%" height="100%"/></div>
        <div style="font-size: 15px">已结算</div>
      </div>
    </div>
    <hr style="border: 1px solid gainsboro;"/>
    <div id="buttom">
      <div class="n2">
        <p style="font-size: 16px;margin-left:20px;font-weight: bolder">领积分换好礼</p></div>
      <div class="n2">
        <p style="font-size: 16px;margin-left:20px;font-weight: bolder">我的兼职收藏</p></div>
      <div class="n2">
        <p style="font-size: 16px;margin-left:20px;font-weight: bolder">我的卡包</p></div>
      <div class="n2">
        <p style="font-size: 16px;margin-left:20px;font-weight: bolder">我要招人</p></div>
      <div class="n2">
        <p style="font-size: 16px;margin-left:20px;font-weight: bolder">社团合作</p></div>
      <div class="n2">
        <p style="font-size: 16px;margin-left:20px;font-weight: bolder">意见反馈</p></div>
      <div class="n2">
        <p style="font-size: 16px;margin-left:20px;font-weight: bolder">更多</p></div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import foot from '@/components/foot.vue'

  export default {
    name: "wode",
    components: {
      'Foot': foot
    },
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
    }
  }
</script>

<style scoped>
  #head {
    /*  border: 1px red solid;*/
    width: 100%;
    height: 150px;
    margin-top: -30px;
  }

  .toubu1 {
    /* border: 1px solid red;*/
    width: 40%;
    height: 100%;
    float: left;
    overflow: hidden;
  }

  #headnext {
    /*border: 1px red solid;*/
    width: 100%;
    height: 130px;

  }

  #headnext .n1 {
    float: left;
    /*border: 1px solid red;*/
    width: 30%;
    height: 100%;
    margin-left: 20px;
    line-height: 50px;
  }

  #middle {
    /*border: 1px red solid;*/
    width: 100%;
    height: 150px;
  }

  #middle .jian1 {
    /* border: 1px solid red;*/
    width: 20%;
    height: 80%;
    float: left;
    margin-left: 30px;
  }

  #middle .jian1 .img {
    width: 70px;
    height: 70px;
    /*border: 1px solid red;*/
    margin: 0 auto;
  }

  #buttom {
   /* border: 1px red solid;*/
    width: 100%;
    height: 1000px;
  }

  .n2{
    /*border: #0ec254 1px solid;*/
    width: 100%;
    height: 60px;
  }
</style>
