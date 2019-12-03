<template>

  <div id="app" >
    <div id="head">
      <div class="tu1" @click="tu()"><h1><i class="el-icon-location-outline">定位</i></h1></div>
      <div class="sousuo">
        <router-link to="/sousuo" style="text-decoration: none">
          <div
            style="margin-left:10px;margin-top:5px;height: 80%;width: 90%;border: #8c939d 1px solid;">
            <div style="margin-left:-20px;margin-top: 8px;font-size: 16px;color: gray">大家都在搜：高薪
              <div style="float:right;margin-right:10px;color: gray">搜索</div>
            </div>

          </div>
        </router-link>
      </div>
      <div class="tu2" style="margin-top: 10px;line-height: 50px">
        <div style="color: #d33939;font-size: 15px">签到</div>
      </div>
    </div>

    <ScrollLoader class="container-main" :style="{maxHeight: maxHeight + 'px'}">
      <div id="lunbo"><!--这里是轮播图-->
        <el-carousel :interval="3000" arrow="always">
          <el-carousel-item v-for="(item,index) in lunbo1" :key="index">
            <!-- <h1>
               {{item.photo}}
             </h1>-->
            <img :src="item.photo" width="100%" height="100%"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--中间分类部分-->
      <div id="fenlei">
        <div class="lei">
          <div style="margin-left:20px;margin-top: 10px;height: 40px;width:40px ">
            <i class="el-icon-date" style="color: #cf9236;font-size: 35px"></i>
          </div>
          <p style="margin-top: 0px;font-size: 14px"> 长期兼职</p>
        </div>
        <div class="lei">
          <div style="margin-left:20px;margin-top: 10px;height: 40px;width:40px "><i class="el-icon-location-outline" style="color: #cf9236;font-size: 35px"></i></div>
          <p style="margin-top: 0px;font-size: 14px"> 附近兼职</p></div>
        <div class="lei">
          <div style="margin-left:20px;margin-top: 10px;height: 40px;width:40px "><i class="el-icon-notebook-2" style="color: #cf9236;font-size: 35px"></i></div>
          <p style="margin-top: 0px;font-size: 14px"> 日常任务</p></div>
        <div class="lei">
          <div style="margin-left:20px;margin-top: 10px;height: 40px;width:40px "><i class="el-icon-s-opportunity" style="color: #cf9236;font-size: 35px"></i></div>
          <p style="margin-top: 0px;font-size: 14px"> 技能兼职</p></div>
        <div class="lei">
          <div style="margin-left:20px;margin-top: 10px;height: 40px;width:40px "><i class="el-icon-s-grid" style="color: #cf9236;font-size: 35px"></i>></div>
          <p style="margin-top: 0px;font-size: 14px"> 更多</p></div>
      </div>
      <br/>
      <!--职位推荐-->
      <h4>&nbsp;职位推荐&nbsp;</h4>
      <div id="tuijian">
        <div id="box">
          <ul>
            <li v-for="v in json.list" class="list">
              <!-- <img v-bind:src="v.src" alt="">-->
              <div @click="qing()">
              <div class="l1"><p style="font-size: 18px">{{v.yao}}</p></div><br/><br/>
              <div class="l2"><p style="font-size: 17px">{{v.price}}元/月</p></div><br/>
              <div class="l3">{{v.cname}}</div><br/>
              <div class="l4">{{v.type}}</div><br/>
              <div class="l5"><p>{{v.addr}}</p></div><br/><br/>
              </div>
              <hr style="border: 1px solid gainsboro;"/>
            </li>

          </ul>
        </div>
      </div>
    </ScrollLoader>
    <Foot></Foot>
  </div>

</template>

<script>
  import ScrollLoader from '@/components/scrollLoader.vue';
  import foot from '@/components/foot.vue'

  export default {

    data() {
      return {
        json: {
          list: [
            {
              yao: '艺术与设计专业在校生',
              price: 198,
              cname: '南窑头飞鱼科技公司',
              type: '月结',
              addr: '西安市南窑国际98栋503'
            },
            {
              yao: '艺术与设计专业在校生',
              price: 198,
              cname: '南窑头飞鱼科技公司',
              type: '月结',
              addr: '西安市南窑国际98栋503'
            },
            {
              yao: '艺术与设计专业在校生',
              price: 198,
              cname: '南窑头飞鱼科技公司',
              type: '月结',
              addr: '西安市南窑国际98栋503'
            },
            {
              yao: '艺术与设计专业在校生',
              price: 198,
              cname: '南窑头飞鱼科技公司',
              type: '月结',
              addr: '西安市南窑国际98栋503'
            },
            {
              yao: '艺术与设计专业在校生',
              price: 198,
              cname: '南窑头飞鱼科技公司',
              type: '月结',
              addr: '西安市南窑国际98栋503'
            },
            {
              yao: '艺术与设计专业在校生',
              price: 198,
              cname: '南窑头飞鱼科技公司',
              type: '月结',
              addr: '西安市南窑国际98栋503'
            }
          ],
        },
        Job: [
          {yao: '艺术类专业大二大三在校生', price: '8000', cname: '南窑飞鱼科技公司', jie: '月结', addr: '南窑头98排'},
          {yao: '计算机类专业大二大三在校生', price: '8000', cname: '南窑飞鱼科技公司', jie: '月结', addr: '南窑头98排'},
          {yao: '体育类专业大二大三在校生', price: '8000', cname: '南窑飞鱼科技公司', jie: '月结', addr: '南窑头98排'},
        ],
        lunbo1: [
          {photo: 'http://img3.imgtn.bdimg.com/it/u=3064701827,539321344&fm=11&gp=0.jpg'},
          {photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1028733324,1416337193&fm=26&gp=0.jpg'},
          {photo:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=451445492,2344344322&fm=26&gp=0.jpg'},
          {photo:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1014412350,1979863063&fm=11&gp=0.jpg'}
        ],
        type: {pic: 'http://q1b2m7x30.bkt.clouddn.com/FlWUPyfKBezdapVZzJdAb8GMWTPi'},
        /*isUpperLaoding: false,*/
        isUnderLaoding: false,
        isRefreshedAll: false,
        isLoadedAll: false,
        minHeight: 700,
      }
    },
    methods:{
      qing:function () {
        this.$router.push("/xiangqing")
      },
      tu:function () {
        this.$router.push("/ditu")
      }
    },

    props: {
      maxHeight: {
        type: Number,
        default: 700
      },
    },

    components: {
      'Foot': foot,
      ScrollLoader,

    },

    mounted() {
      //document.getElementsByTagName('body')[0].scrollTop=0;
      this.minHeight = document.getElementById('window-view-container').offsetHeight;
      this.maxHeight = document.getElementById('window-view-container').offsetHeight;
    },
  }
</script>

<style scoped>
  #head {
    width: 100%;
    height: 90px;
    margin-top: -20px;
    /*border: red solid 1px;*/
  }

  .tu1 {
    float: left;
    /*border: 1px solid red;*/
    width: 120px;
    height: 100%;
    line-height: 88px;
  }

  .sousuo {
    float: left;
    height: 100%;
    width: 70%;

    /*border: 1px solid red;*/
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

  #lunbo {
    width: 100%;
    height: 300px;
    /*border: red solid 1px;*/
    border-radius: 8%;
    overflow: hidden;
  }

  #fenlei {
    width: 100%;
    height: 130px;
    /* border: red solid 1px;*/

  }

  .lei {
    /* border: 1px solid red;*/
    width: 20%;
    height: 100%;
    float: left;
  }

  #tuijian {
    width: 100%;
    height: 10000px;
    /* border: red solid 1px;*/
    position: relative;
    display: block;
    overflow: hidden;
  }

  .t1 {
    border: 1px solid red;
    width: 100%;
    height: 250px;
  }

  #box {
    width: 100%;
    margin-left: -40px;
    overflow: hidden;
  }

  #box ul {
    /*!*display: flex;*!
    flex-wrap: wrap;*/
  }

  #box li {
    height: 90%;
    /* padding: 3px;*/
    list-style: none;
    /*border: 1px solid red;*/
    /*background-color: darkgrey;*/
  }
  .l1{

    font-size: 18px;
    font-weight: bolder;
    float: left;
    width: 60%;
    height: 30%;

    /*border: 1px solid red;*/
  }
   .l2{
     margin-top: -40px;
     /*border: 1px solid red;*/
     font-weight: bold;
     color: red;
    height: 30%;
    float: right;
    width: 20%;
    /*border: 1px solid red;*/
  }
   .l3{
     margin-top: -20px;
     /*border: 1px solid red;*/
     font-size: 15px;
     color: #0ec254;
    margin-left: 10px;
    height: 18%;
    float: left;
    width: 60%;
   /* border: 1px solid red;*/
  }
  .l4{
    margin-top: -30px;
    /*border: 1px solid red;*/
    height: 18%;
    float: right;
    width: 30%;
    /*border: 1px solid red;*/
  }
   .l5{
     margin-top: -20px;
    height: 40px;
    float: left;
    width: 60%;
   /* border: 1px solid red;*/
  }
  .list{
    /*background-color: #0bb8cc;*/
    height: 100%;
    width: 100%;
  }
  .el-carousel__item img {
    /*color: #475669;*/
    /* font-size: 18px;*/
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
