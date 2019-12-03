<template>
  <div>


    <div>简历修改</div>
    <div style="margin-top: 10px">
      毕业院校：<input type="text" style="width: 200px;height: 35px;margin-top: 10px"></input><br>
      主修专业：<input type="text" style="width: 200px;height: 35px;margin-top: 10px"></input><br>
      &nbsp;&nbsp;&nbsp;学历：&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" style="width: 200px;height: 35px;margin-top: 10px"></input><br>
      入学时间：<input type="date" style="width: 200px;height: 35px;margin-top: 13px"></input><br>
      毕业时间：<input type="date" style="width: 200px;height: 35px;margin: 13px"></input><br>
      在校经历：<input type="text" style="width: 200px;height: 200px;margin: 10px"></input><br>
      <el-form>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>

      </el-form-item>
      </el-form>
  </div>
  </div>
</template>

<script>
    export default {
        name: "resume"
    }
</script>

<style scoped>

</style>
