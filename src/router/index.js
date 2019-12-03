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
import qianbao from '@/components/wode/qianbao'
import jifen from '@/components/wode/jifen'
import selfxin from '@/components/wode/selfxin'
import jian from '@/components/wode/jian'
import xiangqing from '@/components/shouye/xiangqing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
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
      path: '/qianbao',
      name: 'qianbao',
      component: qianbao
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
    }
  ]
})
