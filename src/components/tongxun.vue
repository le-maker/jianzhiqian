<template>
  <div>
    <div id="head"><h1>通讯录页面</h1></div>
    <hr style="border: 1px solid gainsboro;"/>
    <div id="next">
      <div class="fen"><router-link  to="#" style=" text-decoration:none;color: #8c939d;font-size: 16px;font-weight: bolder">消息</router-link></div>
      <div class="fen"><router-link to="#" style=" text-decoration:none;color: #8c939d;font-size: 16px;font-weight: bolder">通讯录</router-link></div>
    </div>
    <hr style="border: 1px solid gainsboro;"/>
    <div id="sousuo">
      <input type="text" name="cha" style="width: 80%;height: 100%;float: left"/>
    <button style="float: left;height: 100%;width: 20%">搜索</button>
    </div>
    <hr style="border: 1px solid gainsboro;"/>
    <ScrollLoader class="container-main" :style="{maxHeight: maxHeight + 'px'}">
      <div id="foot1"><h1>这是通讯录页面消息展示</h1></div>
    </ScrollLoader>
    <Foot></Foot>
  </div>
</template>

<script>
  import ScrollLoader from '@/components/scrollLoader.vue';
  import foot from '@/components/foot.vue'

  export default {
    name: "tongxun",
    components: {
      ScrollLoader,
      'Foot': foot
    },
    data() {
      return {
        /*isUpperLaoding: false,*/
        isUnderLaoding: false,
        isRefreshedAll: false,
        isLoadedAll: false,
        minHeight: 700,
      }
    },
    props: {
      maxHeight: {
        type: Number,
        default: 700
      },
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
    /* border: 1px red solid;*/
    width: 100%;
    height: 40px;
    margin-top: -50px;
  }

  #next {
    /*border: 1px red solid;*/
    width: 100%;
    height: 50px;
  }

  .fen {
   /* border: 1px solid red;*/
    float: left;
    width: 40%;
    height: 50%;
    margin-top: 10px;
    margin-left: 50px;
  }

  #sousuo {
  /*  border: 1px red solid;*/
    width: 90%;
    height: 50px;
    margin-left: 40px;
  }

  #foot1 {
   /* border: 1px red solid;*/
    width: 100%;
    height: 10000px;
  }
</style>
