<template>
    

<div>
  <div style="font-size: 20px;">基本信息</div>
  <div style="width: 350px;height: 700px;align-content: center;margin-top: 50px">
  <el-form ref="user" :model="user" label-width="80px">
   <!--<div style="float: left;"> <p>
    <el-form-item label="头像" style="float: left">
    <el-col :span="12" style="float: right;margin-right: 15px">
      
      <div class="demo-basic&#45;&#45;circle">
        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-col>
    </el-form-item></p>
    </div>-->
    <el-form-item label="姓名">
    <el-input v-model="user.uname"></el-input>
  </el-form-item>

    <el-form-item label="性别">
      <el-radio v-model="user.sex" label="1">男</el-radio>
      <el-radio v-model="user.sex" label="2">女</el-radio>
  </el-form-item>
    <el-form-item label="生日">
    <div class="block">
      <el-date-picker
        v-model="user.birth"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    </el-form-item>
    <el-form-item label="所在城市">
      <el-input v-model="user.city"></el-input>
    </el-form-item>

    <el-form-item label="教育状态">
      <el-input v-model="user.educatestu"></el-input>
    </el-form-item>

    <el-form-item label="微信">
      <el-input v-model="user.weixin"></el-input>
    </el-form-item>

    <el-form-item label="手机号">
      <el-input v-model="user.phone"></el-input>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        user: {
          name: '12',
          city: '23',
          educatestu:'34',
          edustatus:"45",
          sex:'2',
          birth:'56',
          academic:'67',
          weixin:'123'
        }
      }
    },
    methods: {
      onSubmit() {
        this.$router.push("/wode")
      }
    },
    /*mounted(){
      axios.post()
    }*/
  }
</script>


<style scoped>

</style>
