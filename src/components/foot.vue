<template>
    <div>
      <div class="footer_guide">
        <a href="javascript:;" class="guide_item"  @click="goTo('/main')">
	      	<span class="item_icon">
	        	<i class="infant icon-home"></i>
	      	</span>
          <span><h1>首页</h1></span>
        </a>
        <a href="javascript:;" class="guide_item"   @click="goTo('/jianzhi')">
	      	<span class="item_icon">
	        	<i class="iconfont icon-fenlei"></i>
	      	</span>
          <span><h1>全部兼职</h1></span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goTo('/tongxun')">
	      	<span class="item_icon">
	        	<i class="iconfont icon-cart"></i>
	      	</span>
          <span><h1>通讯录</h1></span>
        </a>
        <a href="javascript:;" class="guide_item"   @click="goTo('/wode')">
	      	<span class="item_icon">
	        	<i class="iconfont icon-mine" ></i>

	      	</span>
          <span><h1>我的</h1></span>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "foot",
      methods : {
        goTo(path){
          this.$router.replace(path)
        }
      }

    }
</script>

<style scoped>
  .footer_guide {
    border-top:1px solid #e4e4e4;
    position:fixed;
    z-index :100;
    left :0;
    right :0;
    bottom:1px;
    background-color:#fff;
    width:100%;
    height:100px;
    display:flex;
  }
  .guide_item{
    display:flex;
    flex:1;
    text-align :center;
    flex-direction:column;
    align-items :center;
    margin:5px;
    color:#999999;
  }
  .on{
    color:#02a774
  }
  span{
    font-size:12px;
    margin-top:2px;
    margin-bottom:2px;
  }
  .iconfont{
    font-size:22px;
  }
</style>
