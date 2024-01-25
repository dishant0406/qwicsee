import { ChatBubbleIcon, GearIcon, GlobeIcon, MixIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { create } from "zustand";

  const useSideBarOptions = create<{
    sideBarOptions: {
      name: string,
      Icon: any,
      isSelected: boolean,
      isVisible: boolean
    }[],
    setSideBarOptions: (sideBarOptions: {
      name: string,
      Icon: any,
      isSelected: boolean,
      isVisible: boolean
    }[]) => void,
    toggleSideBarOption: (name: string) => void
  }>(set => ({
    sideBarOptions: [
      {
        name: 'Dashboard',
        Icon: MixIcon,
        isSelected: true,
        isVisible: true
      },
      {
        name: 'Editor',
        Icon: Pencil2Icon,
        isSelected: false,
        isVisible: true
      },
      {
        name: 'Community',
        Icon: GlobeIcon,
        isSelected: false,
        isVisible: true
      },
      {
        name: 'Settings',
        Icon: GearIcon,
        isSelected: false,
        isVisible: false
      },
      {
        name: 'Contact Us',
        Icon: ChatBubbleIcon,
        isSelected: false,
        isVisible: true
      },
    ],
    setSideBarOptions: (sideBarOptions) => set({sideBarOptions}),
    toggleSideBarOption: (name) => set(state => {
      //if true then set to false and vice versa
      const index = state.sideBarOptions.findIndex(option => option.name === name)
      state.sideBarOptions[index].isSelected = !state.sideBarOptions[index].isSelected
      return {sideBarOptions: state.sideBarOptions}
     
    }
    )
  }))

  export {
    useSideBarOptions
  }
