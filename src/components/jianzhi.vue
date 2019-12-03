<template>
  <div id="app">
    <div id="head">
      <h1>全部兼职</h1>
    </div>
    <hr style="border: 1px solid gainsboro;"/>
    <div id="fenlei">
      <div class="e1">
        <el-select v-model="value" placeholder="类型" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="e1">
        <el-select v-model="value" placeholder="区域" >
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="e1">
        <el-select v-model="value" placeholder="排序" >
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="e1">
        <el-select v-model="value" placeholder="筛选" >
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <hr style="border: 1px solid gainsboro;"/>
    <ScrollLoader class="container-main" :style="{maxHeight: maxHeight + 'px'}">
      <div id="body">
        <div id="box">
          <ul>
            <li v-for="v in json.list" class="list">
              <!-- <img v-bind:src="v.src" alt="">-->
              <div class="l1"><p style="font-size: 18px">{{v.yao}}</p></div><br/><br/>
              <div class="l2"><p style="font-size: 17px">{{v.price}}元/月</p></div><br/>
              <div class="l3">{{v.cname}}</div><br/>
              <div class="l4">{{v.type}}</div><br/>
              <div class="l5"><p>{{v.addr}}</p></div><br/><br/>
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
    name: "jianzhi",
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
        /*isUpperLaoding: false,*/
        isUnderLaoding: false,
        isRefreshedAll: false,
        isLoadedAll: false,
        minHeight: 700,
        options: [{
          value: '选项1',
          label: '促销'
        }, {
          value: '选项2',
          label: '模特'
        }, {
          value: '选项3',
          label: '服务员'
        }],
        options2: [{
          value: '选项1',
          label: '西安市'
        }, {
          value: '选项2',
          label: '渭南市'
        }, {
          value: '选项3',
          label: '咸阳市'
        }],
        options3: [{
          value: '选项1',
          label: '综合排序'
        }, {
          value: '选项2',
          label: '最新发布'
        }, {
          value: '选项3',
          label: '离我最近'
        }],
        options4: [{
          value: '选项1',
          label: '限男生'
        }, {
          value: '选项2',
          label: '限女生'
        }],
      }
    },
    props: {
      maxHeight: {
        type: Number,
        default: 700
      },
    },
    methods: {},
    components: {
      ScrollLoader,
      'Foot': foot
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
    /*border: 1px red solid;*/
    width: 100%;
    height: 80px;
    margin-top: -50px;
  }

  #fenlei {
    width: 100%;
   /* border: red 1px solid;*/
    height: 30px;
  }

  .e1 {
 /* border: 1px solid red;*/
    height: 80%;
    width: 25%;
    float: left;
  }

  #body {
    width: 100%;
    height: 10000px;
    /*border: 1px red solid;*/
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
</style>
