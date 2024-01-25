import {create} from 'zustand'
import { useSideBarOptions } from '..'

/**
 * @typedef boolean
 * @description useNewFolioModalStore is a Zustand store that holds the state of the new folio modal
 * @returns {boolean} open
 * @returns {function} setOpen
 * @returns {function} toggleOpen
 */
const useNewFolioModalStore = create<{
  open:boolean,
  setOpen:(open:boolean) => void,
  toggleOpen:() => void
}>(set => ({
  open: false,
  setOpen: (open) => set({open}),
  toggleOpen: () => set(state => ({open: !state.open}))
}))


/**
 * @typedef boolean
 * @description useFieldSelectorModalStore is a Zustand store that holds the state of the field selector modal
 * @returns {boolean} open
 * @returns {function} setOpen
 * @returns {function} toggleOpen
 */
const useFieldSelectorModalStore = create<{
  open:boolean,
  setOpen:(open:boolean) => void,
  toggleOpen:() => void
}>(set => ({
  open: false,
  setOpen: (open) => {
    useSideBarOptions.getState().toggleSideBarOption('Editor')
    set({open})
  },
  toggleOpen: () => set(state => {
    useSideBarOptions.getState().toggleSideBarOption('Editor')
    return {open: !state.open}
  })
}))

export {
  useNewFolioModalStore,
  useFieldSelectorModalStore
}