import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
Vue.use(Vuex)

const state={
    token:''
}

const mutations={
    [types.LOGIN](state,data){
        state.token=data
        window.localStorage.token=data
    },
    [types.LOGOUT](state){
        state.token=''
        window.localStorage.removeItem('token')
    }
}

const actions={
    Login({commit},data){
        commit(types.LOGIN,data)
    },
    Logout({commit}){
        commit(types.LOGOUT)
    }
}

const store=new Vuex.Store({
    state,
    mutations,
    actions
})

export default store