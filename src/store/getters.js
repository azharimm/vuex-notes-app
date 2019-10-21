export const note = (state) =>{
    return state.note
}

export const notes = (state) =>{
    return state.notes.sort((a, b) => {
        return b['lastSaved'] - a['lastSaved']
    })
}