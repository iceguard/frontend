import { createStore } from 'redux'
import { auth } from '../reducers'

export const store = createStore(auth)
