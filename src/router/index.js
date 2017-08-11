import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/login'
import Repository from '@/views/repository'

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
        component:Repository
    }
]

let router=new Router({
    routes
})

export default router