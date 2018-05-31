import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import ArticleDetails from '@/components/articleDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '博客主页',
      component: Index
    },
    {
      path: '/ArticleDetails',
      name: '文章内容页',
      component: ArticleDetails
    }
  ]
})
