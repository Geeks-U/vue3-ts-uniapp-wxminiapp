import {createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

export const pinia = createPinia().use(persist)

import { useUserStore }  from './modules/user'

export {
  useUserStore
}