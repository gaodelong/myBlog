import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
// import ArticleDetails from '@/components/articleDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '博客主页',
      component: Index
    },
    // {
    //   path: '/ArticleDetails',
    //   name: '文章内容页',
    //   component: ArticleDetails
    // }
    {
      path: '/404',
      name: '404页面',
      component: resolve => require(['@/components/404'],resolve),
    },
    {
      path: '*',
      redirect: '/404'   //重定向到404
    }
  ]
})
