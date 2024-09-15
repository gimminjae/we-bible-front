import { create } from "zustand"
import { getCookie } from "../../util/cookie"
import { bibleInfos } from "../../api/bible"

type BibleSearchParam = {
  bookCode: string
  chapter: number
  lang: "ko" | "en" | string
}
type Store = {
  searchParam: BibleSearchParam
  set: any
  next: any
  previous: any
  changeLang: any
}

const initialValue = {
  bookCode: "genesis",
  chapter: 1,
  lang: "ko",
}

const getPreviousBookCode = (bookCode: string) => {
  const presentBibleIndex = bibleInfos.findIndex(
    (bible) => bible.bookCode === bookCode
  )
  const bible = bibleInfos[presentBibleIndex - 1]
  return bible
}
const getNextBookCode = (bookCode: string) => {
  const presentBibleIndex = bibleInfos.findIndex(
    (bible) => bible.bookCode === bookCode
  )
  const bible = bibleInfos[presentBibleIndex + 1]
  return bible
}

const bibleSearchParamFromCookie = getCookie("bibleSearchParam")

const useBibleSearchParams = create<Store>((set: any) => ({
  searchParam: bibleSearchParamFromCookie || initialValue,
  next: () =>
    set(({ searchParam: state }: { searchParam: BibleSearchParam }) => {
      const bible = bibleInfos.find((info) => info.bookCode === state.bookCode)
      const newChapter = state.chapter + 1
      return (bible?.maxChapter || 0) < newChapter
        ? {
            searchParam: {
              ...state,
              bookCode: getNextBookCode(state.bookCode).bookCode,
              chapter: 1,
            },
          }
        : {
            searchParam: {
              ...state,
              chapter: newChapter,
            },
          }
    }),
  previous: () =>
    set(({ searchParam: state }: { searchParam: BibleSearchParam }) => ({
      searchParam: {
        ...state,
        bookCode: !(state.chapter - 1)
          ? getPreviousBookCode(state.bookCode).bookCode
          : state.bookCode,
        chapter:
          state.chapter - 1 || getPreviousBookCode(state.bookCode).maxChapter,
      },
    })),
  set: (input: BibleSearchParam) =>
    set(() => ({
      searchParam: input,
    })),
  changeLang: (lang: string) =>
    set(({ searchParam: state }: { searchParam: BibleSearchParam }) => ({
      searchParam: {
        ...state,
        lang,
      },
    })),
}))
// use case
// function BibleSearchParams() {
//   const { searchParam, set } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }
export default useBibleSearchParams
