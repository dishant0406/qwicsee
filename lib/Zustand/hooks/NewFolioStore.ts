import {create} from 'zustand'


/** 
 * @typedef NewFolioType
 * @property {string} name
 * @property {string} folio_name
 * @property {'left' | 'right' | 'top'} layout
 * @property {string} theme
 * @description useNewFolioStore is a Zustand store that holds the state of the new folio form
 * @returns {NewFolioType} newFolio
 * @returns {function} setNewFolio
*/
const useNewFolioStore = create<{
  newFolio:NewFolioType,
  setNewFolio:(newFolio:NewFolioType) => void
}>(set => ({
  newFolio: {
    name: '',
    folio_name: '',
    layout:'left',
    theme: 'light'
  },
  setNewFolio: (newFolio) => set(state => ({newFolio: {...state.newFolio, ...newFolio}}))
}))

export default useNewFolioStore