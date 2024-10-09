import { create } from "zustand"

type Store = {
  content: any
  set: any
  addCopyText: any
  emptyCopyText: any
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
          copyText: state?.copyText?.some(
            (val: any) => val?.verse === verseObject?.verse
          )
            ? state?.copyText?.filter(
                (val: any) => val.verse !== verseObject.verse
              )
            : [...state?.copyText, verseObject],
        },
      }
    }),
  emptyCopyText: () =>
    set(({ content: state }: { content: any }) => {
      return {
        content: {
          ...state,
          copyText: [],
        },
      }
    }),
}))

export default useSelectedContent
