import { defineStore } from 'pinia'

export const useScrollPositionValue = defineStore('scrollPosition', {
    state(){
        return {
            scrollPosition: 0
        }
    },
    getters: {
        getScrollPosition: (state)=> state.scrollPosition
    },
    actions:{
        setScrollPosition(position){
            this.scrollPosition = position
        }
    }
})