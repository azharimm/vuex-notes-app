export const saveNote = ({commit, dispatch, state}) => {
    //touch last saved timestamp

    if(state.note.id == null){
        //set current note id
        commit('SET_CURRENT_NOTE_ID', Date.now())
        //prepend to note
        commit('PREPEND_TO_NOTES', state.note)
    }

    //store note
}