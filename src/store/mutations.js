export const SET_CURRENT_NOTE_ID = (state, id) => {
    state.note.id = id
}

export const PREPEND_TO_NOTES = (state, note) => {
    state.notes.unshift(note)
}