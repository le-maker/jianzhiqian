<template>
  <div >
    <div id="head">

      <div class="tu1"><h1>返回</h1></div>

      <div class="sousuo">
<input type="search" style="outline:none;width: 100%;height: 100%;border: 1px gray solid; auto:0;border-radius: 10%"/>

          </div>
      <div  style="float:left;margin-top:4px"><el-button type="success" round>搜索</el-button></div>
      </div><hr/>
<p style="float: left;margin-left: 10px">热门搜索</p>
    </div>
</template>

<script>
    export default {
        name: "sousuo"
    }
</script>

<style scoped>
  #head {
    width: 100%;
    height: 90px;
    /*border: red solid 1px;*/
  }

  .tu1 {
    float: left;
   /* border: 1px solid red;*/
    width: 120px;
    height: 100%;
    line-height: 88px;
  }

  .sousuo {
    float: left;
    height: 80%;
    width: 70%;
   /* border: 1px solid red;*/
  }
</style>
