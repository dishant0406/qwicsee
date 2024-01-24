import {create} from 'zustand'

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

export {
  useNewFolioModalStore
}