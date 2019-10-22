import {defaultState} from './default'
import {clone} from 'lodash'

export const SET_CURRENT_NOTE_ID = (state, id) => {
    state.note.id = id
}

export const PREPEND_TO_NOTES = (state, note) => {
    state.notes.unshift(note)
}

export const TOUCH_LAST_SAVED = (state) => {
    state.note.lastSaved = Date.now()
}

export const SET_SAVE_TIMEOUT = (state, {callback, delay}) =>{
    state.saveTimeout = setTimeout(callback, delay);
}

export const CLEAR_SAVE_TIMEOUT = (state) =>{
    clearInterval(state.saveTimeout)
    state.saveTimeout = null
}

export const SET_CURRENT_NOTE = (state, note) =>{
    state.note = note
}

export const START_NEW_NOTE = (state, note) =>{
    if(note == null){
        state.note = clone(defaultState)
        return
    }

    state.note = note
}

export const DELETE_NOTE = (state, id) => {
    state.notes = state.notes.filter((note) => {
        return note.id !== id
    })
}