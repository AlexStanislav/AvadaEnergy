import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        hasLoaded: false
    }),
    actions: {
        toggleHasLoaded() {
            this.hasLoaded = !this.hasLoaded
        }
    }
})