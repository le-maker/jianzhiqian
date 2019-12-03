<template>
    <div>
      <div class="search">
        <input v-model='keyword' class="search-input" type="text" placeholder="输入城市名或者拼音"/>
      </div>
      <div class="search-content" v-show="keyword" ref="search">
        <ul>
          <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
          <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ditu",
      props:{
        cities: Object
      },
      data(){
        return{
          keyword:'',
          list:[
            {name:'西安市'},
            {name:'陕西省'},
            {name:'渭南市'},
            {name:'河南省'},
          ],
          timer:null
        }
      },
      watch :{
        keyword(){
          if(this.timer){
            clearTimeout(this.timer)
          }
          if(!this.keyword){
            this.list=[]
            return
          }
          this.timer=setTimeout(() => {
            const result=[]
            for (let i in this.cities){
              //console.log(i)
              this.cities[i].forEach((value) => {
                if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                  result.push(value)
                }
              });
            }
            //console.log(result)
            this.list=result
          }, 100);

        }
      },
      mounted(){
        this.scroll=new Bscroll(this.$refs.search)
      },
      computed:{
        hasNoData(){
          return !this.list.length
        }
      }
    }
</script>

<style scoped>

</style>
