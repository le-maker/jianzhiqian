<template>
  <div >
  {{name}}
      <template>
        <el-alert
          title="艺术与诗歌："
          type="info"
          description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
        </el-alert>
      </template>
    <template>
      <el-alert
        title="紧急："
        center="false"
        type="warning"
        description="急需明日早上8点，在西安市xxx区xxx路xxx传单2人">
      </el-alert>
    </template>
    <template>
    <el-alert
      center="false"
      title="通知："
      type="success"
      description="您的兼职信息已过期">
    </el-alert>
      <template>
        <el-alert
          title="紧急："
          center="false"
          type="warning"
          description="急需!急需！兼职两名男女不限，日薪过万">
        </el-alert>
      </template>
      <template>
        <el-alert
          title="满意度调查"
          center="error"
          type="warning"
          description="亲，您对我们服务满意吗">
        </el-alert>
      </template>
  </template>
  </div>
</template>

<script>
    export default {
        name: "tongx1",
        data(){
          return{

          }
      },
      methods:{

      }

    }
</script>

<style scoped>

</style>
