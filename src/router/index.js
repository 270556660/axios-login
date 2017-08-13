import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/login'
import Repository from '@/views/repository'
import store from '@/store/store'

Vue.use(Router)

const routes=[
    {
        path:'/',
        name:'index',
        component:Index
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/repository',
        name:'repository',
        component:Repository,
        meta:{
            requiresAuth:true
        }
    }
]

let router=new Router({
    routes
})

router.beforeEach((to, from, next) => {
    // 判断该路由是否需要登录权限
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        // 通过vuex state获取当前的token是否存在
        if (store.state.token) {
            next()
        } 
        else {
            next({
                path:'/login',
                query:{
                    redirect:to.fullPath
                }
            })
        }
    } 
    else {
        next() // 确保一定要调用 next()
    }
})


export default router