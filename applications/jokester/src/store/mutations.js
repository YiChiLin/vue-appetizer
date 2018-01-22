// Actual mutation functions

import * as types from './mutation-types'

// This includes all mutaion functions
export const mutations = {
    //First mutation function
    [types.INIT_JOKES] (state, payload){
        state.jokes.push(...payload);
    },
    [types.ADD_JOKE](state, payload){
        state.jokes.push(payload);
    }

}