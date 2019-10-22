import {defaultState} from './default'
import {clone} from 'lodash'

export default {
    note: clone(defaultState),
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    saveTimeout: null
}