import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import regist1 from '@/components/regist'
import main1 from '@/components/main'
import wode from '@/components/wode'
import jianzhi from '@/components/jianzhi'
import sousuo from '@/components/sousuo'
import tongxun from '@/components/tongxun'
import jianli from '@/components/wode/jianli'
import jifen from '@/components/wode/jifen'
import selfxin from '@/components/wode/selfxin'
import jian from '@/components/wode/jian'
import jiantai from '@/components/wode/jiantai'
import xiangqing from '@/components/shouye/xiangqing'
import ditu from '@/components/shouye/ditu'
import baoming from '@/components/shouye/baoming'
import apply from '@/components/wode/apply'
import all from '@/components/wode/all'
import bm1 from '@/components/wode/bm1'
import ly2 from '@/components/wode/ly2'
import dg3 from '@/components/wode/dg3'
import js4 from '@/components/wode/js4'
import qianbao from '@/components/wode/qianbao'
import srmx from '@/components/wode/srmx'
import zcmx from '@/components/wode/zcmx'
import tongx from '@/components/tongx'
import tongxx from '@/components/tongxx'
import info from '@/components/info'
import resume from '@/components/resume'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    },

    {
      path: '/baoming',
      name: 'baoming',
      component: baoming
    },
    {
      path: '/ditu',
      name: 'ditu',
      component: ditu
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/jiantai',
      name: 'jiantai',
      component: jiantai
    },
    {
      path: '/jianli',
      name: 'jianli',
      component: jianli
    },
    {
      path: '/jian',
      name: 'jian',
      component: jian
    },
    {
      path: '/selfxin',
      name: 'selfxin',
      component: selfxin
    },

    {
      path: '/jifen',
      name: 'jifen',
      component: jifen
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo
    },
    {
      path: '/tongxun',
      name: 'tongxun',
      component: tongxun
    },
    {
      path: '/jianzhi',
      name: 'jianzhi',
      component: jianzhi
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist1
    },
    {
      path: '/main',
      name: 'main',
      component: main1
    },
    {
    path: '/fanhui', redirect: '/wode'
    },
    {
      path: '/qianbao',
      name: 'qianbao',
      component: qianbao,
      children:[
        {path:'/srmx',component:srmx},
        {path:'/zcmx',component:zcmx}
      ]
    },
    {
      path: '/tongxun',
      name: 'tongxun',
      component: tongxun,
      children:[
        {path:'/tongx',component:tongx},
        {path:'/tongxx',component:tongxx}
      ]
    },

    {
      path: '/apply',
      name: 'apply',
      component: apply,
      children:[
        {path:'/all',component:all},
        {path:'/bm1',component:bm1},
        {path:'/ly2',component:ly2},
        {path:'/dg3',component:dg3},
        {path:'/js4',component:js4}
      ]
    }
  ]
})
