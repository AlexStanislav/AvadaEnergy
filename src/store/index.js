import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        hasLoaded: false,
        adminLogged: false,
        noShow: false,
        serverURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : window.location.origin 
    }),
    actions: {
        toggleHasLoaded() {
            this.hasLoaded = !this.hasLoaded
        },
        toggleAdminLogged(){
            this.adminLogged = !this.adminLogged
        },
        setToken(token){
            this.token = token
        },
        clearToken(){
            this.token = null
        },
        setNoShow(value){
            this.noShow = value
        }
    }
})