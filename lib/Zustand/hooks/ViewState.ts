import { DesktopIcon, MobileIcon } from '@radix-ui/react-icons'
import {create} from 'zustand'



const useViewState = create<{
  mode: {
    name: string,
    active: boolean,
    icon: any
  }[],
  setMode: (mode: {
    name: string,
    active: boolean,
    icon: any
  }[]) => void,
  toggleMode: (name: string) => void,
  selectedMode: string
}>(set => ({
  mode: [
    {
      name: 'Mobile',
      active: false,
      icon: MobileIcon
    },
    {
      name: 'Desktop',
      active: true,
      icon: DesktopIcon
    }
  ],
  setMode: (mode) => {
    set({
      mode,
      selectedMode: mode.find(mode => mode.active)!.name
    })
  },
  toggleMode: (name) => set(state => {
    const index = state.mode.findIndex(mode => mode.name === name)
    if (!state.mode[index].active) {
      state.mode[index].active = true
      //set all others to false
      state.mode.forEach((mode, i) => {
        if (i !== index) {
          mode.active = false
        }
      })
    } else {
      state.mode[index].active = false
      if (index === state.mode.length - 1) {
        state.mode[0].active = true
      } else {
        state.mode[index + 1].active = true
      }
    }
    return {
      mode: state.mode,
      selectedMode: state.mode.find(mode => mode.active)!.name
    }
  }),
  selectedMode: 'Desktop'
}))

export {
  useViewState
}

