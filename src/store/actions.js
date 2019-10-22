export const saveNote = ({commit, dispatch, state}) => {
    //touch last saved timestamp
    commit('TOUCH_LAST_SAVED')

    if(state.note.id == null){
        //set current note id
        commit('SET_CURRENT_NOTE_ID', Date.now())
        //prepend to note
        commit('PREPEND_TO_NOTES', state.note)
    }

    //store note
    dispatch('storeNote')
}

export const storeNote = ({state}) =>{
    localStorage.setItem('notes', JSON.stringify(state.notes))
}

export const openNote = ({commit}, note) =>{
    commit('SET_CURRENT_NOTE', note)
}

export const newNote = ({commit, dispatch}) => {
    dispatch('stopSaveTimeout')
    commit('START_NEW_NOTE', null);
}

export const deleteNote = ({commit, dispatch, state}, id) => {
    if(id === state.note.id){
        dispatch('newNote')
    }
    commit('DELETE_NOTE', id);
    dispatch('storeNote')
}

export const startSaveTimeout = ({commit, dispatch, state}) => {
    if(state.saveTimeout !== null){
        return
    }
    commit('SET_SAVE_TIMEOUT', {
        callback(){
            dispatch('saveNote')
            dispatch('stopSaveTimeout')
        },
        delay: 1000
    })
}

export const stopSaveTimeout = ({commit}) => {
  commit('CLEAR_SAVE_TIMEOUT')
}