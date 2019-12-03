<template>
  <div>
    <el-collapse  style="margin-top: 30px">
      <div class="tong" v-for="(items,index) in tong">
        <i class="el-icon-s-custom" style="float: left;line-height: 30px;width: 40px;height: 40px"> </i>
        <el-collapse-item  :title="items.name" name="1"  >
         <!-- <div>{{items.c1}}</div>
          <div>{{items.c2}}</div>
          <div>{{items.c3}}</div>
          <div>{{items.c4}}</div>-->
        </el-collapse-item>
      </div>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    name: "tongxx",
    data(){
      return{
        tong:[
          {name:'张三',c1:'联系他',c2:'拉黑他',c3:'推荐他',c4:'雇佣他'},
          {name:'李四',c1:'联系他',c2:'拉黑他',c3:'推荐他',c4:'雇佣他'},
          {name:'王五',c1:'联系他',c2:'拉黑他',c3:'推荐他',c4:'雇佣他'},
          {name:'赵六',c1:'联系他',c2:'拉黑他',c3:'推荐他',c4:'雇佣他'},
          {name:'张四',c1:'联系他',c2:'拉黑他',c3:'推荐他',c4:'雇佣他'},

        ]

      }
    }
  }
</script>

<style scoped>
.tong{
  border: 1px green solid;
  width: 90%;
  margin: 0 auto;
  height: 80px;
}
</style>
