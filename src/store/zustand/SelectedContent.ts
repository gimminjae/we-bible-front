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
  addCopyText: (verseObject: any) =>
    set(({ content: state }: { content: any }) => {
      return {
        content: {
          ...state,
          copyText:
            state?.copyText?.length > 0
              ? [...new Set([...state?.copyText, verseObject])]
              : [verseObject],
        },
      }
    }),
}))

export default useSelectedContent
