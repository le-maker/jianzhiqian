<template>
  <div id="app">

    <div style="margin-top: -20px;border: 1px solid ghostwhite">
      <div style="width: 10%;height: 30px;float: left" @click="fan()">
        <img src="../quanjianzhi/fanhui.jpg" width="100%" height="100%"/>
      </div>
      <h1 style="">兼职详情</h1>
    </div>
    <ScrollLoader class="container-main" :style="{maxHeight: maxHeight + 'px'}">
      <div id="head">

        <div class="demo-image__placeholder">
          <div class="block">
            <el-image :src="src"></el-image>
          </div>
        </div>

        <div class="ji">
          <div class="title"><p style="font-size: 18px;font-weight: bold">急招苹果APP试玩师|在家躺赚|工资秒结</p></div>
          <div class="price"><p style="color: red;font-size: 16px">300元/天</p></div>
        </div>
      </div>
      <h4>&nbsp;&nbsp;招聘要求&nbsp;&nbsp;</h4>
      <div id="one">

      </div>
      <h4>&nbsp;&nbsp;工作福利&nbsp;&nbsp;</h4>
      <div id="two"></div>
      <h4>&nbsp;&nbsp;职位详情&nbsp;&nbsp;</h4>
      <div id="three"></div>
      <h4>&nbsp;&nbsp;工作时间&nbsp;&nbsp;</h4>
      <div id="four"></div>
      <div id="foot">
        <div class="di" @click="zixun(items.url)">
          <button style="margin-top:10px;font-size: 20px;font-weight: bold;color: green">咨询客服</button>
        </div>
        <div class="di">
          <button style="margin-top:10px;font-size: 20px;font-weight: bold;color: green">我要分享</button>
        </div>
        <div class="di" @click="baoming()">
          <button style="margin-top:10px;font-size: 20px;font-weight: bold;color: green">我要报名</button>
        </div>
      </div>
    </ScrollLoader>
  </div>
</template>

<script>
  import ScrollLoader from '@/components/scrollLoader.vue';

  export default {
    data() {

      return {
        jianzhi: {},
        items: {url: "https://qm.qq.com/cgi-bin/qm/qr?k=fa6_wdhSK7S7ZrXKZI1ONJ44234kXWDn"},
        jian:{},
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    },
    props: {
      maxHeight: {
        type: Number,
        default: 700
      },
    },

    components: {
      ScrollLoader,
    },
    methods: {
      zixun: function (e) {
        window.location.href(e);
      },
      baoming: function () {
        this.$router.push("/baoming")
      },
      fan:function () {
        this.$router.push("/main")
      }
    }
  }
</script>

<style scoped>
  #head {

    /* border: red solid 1px;*/
    width: 100%;
    height: 200px;
    background-color: lightgray;
  }

  h4 {
    display: flex;
    flex-direction: row;
  }

  h4:before,
  h4:after {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid #000;
    margin: auto;
  }

  #one {
    /*border: red solid 1px;*/
    width: 100%;
    height: 150px;
    background-color: lightgray;
  }

  #fan {
    float: left;
    /*border: 1px solid red;*/
    height: 40%;
    width: 10%;
  }

  #two {
    /*border: red solid 1px;*/
    width: 100%;
    height: 300px;
    background-color: lightgray;
  }

  #three {
    /*border: red solid 1px;*/
    width: 100%;
    height: 500px;
    background-color: lightgray;
  }

  #four {
    /* border: red solid 1px;*/
    width: 100%;
    height: 200px;
    background-color: lightgray;
  }

  #foot {
    position: fixed;
    bottom: 0px;
    left: 0px;
    /*border: 1px solid red;*/
    width: 100%;
    height: 130px;
    background-color: darkseagreen;
  }

  .di {
    width: 30%;
    /*border: 1px solid red;*/
    height: 100%;
    float: left;
    margin-left: 15px;
    margin-top: 18px;

  }


</style>
