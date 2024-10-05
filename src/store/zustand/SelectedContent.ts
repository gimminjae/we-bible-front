import { create } from "zustand"

type Store = {
  content: any
  set: any
  addCopyText: any
}

const useSelectedContent = create<Store>((set: any) => ({
  content: {},
  set: (key: string, value: any) =>
    set(({ content: state }: { content: any }) => {
      return {
        content: {
          ...state,
          [key]: value,
        },
      }
    }),
  addCopyText: (text: any) =>
    set(({ content: state }: { content: any }) => {
      return {
        content: {
          ...state,
          copyText: (state?.copyText || "") + "\n" + text,
        },
      }
    }),
}))

export default useSelectedContent
