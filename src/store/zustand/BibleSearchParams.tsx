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

const getPreviousBookCode = (bookCode: string) =>
  bibleInfos[bibleInfos.findIndex((bible) => bible.bookCode === bookCode) - 1]
const getNextBookCode = (bookCode: string) =>
  bibleInfos[bibleInfos.findIndex((bible) => bible.bookCode === bookCode) + 1]
const getPresentBible = (bookCode: string) =>
  bibleInfos.find((info) => info.bookCode === bookCode)

const bibleSearchParamFromCookie = getCookie("bibleSearchParam")

const useBibleSearchParams = create<Store>((set: any) => ({
  searchParam: bibleSearchParamFromCookie || initialValue,
  next: () =>
    set(({ searchParam: state }: { searchParam: BibleSearchParam }) => {
      const bible = getPresentBible(state.bookCode)
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
    set(({ searchParam: state }: { searchParam: BibleSearchParam }) => {
      const previousBible = getPreviousBookCode(state.bookCode)
      const newChapter = state.chapter - 1
      return {
        searchParam: {
          ...state,
          bookCode: !newChapter ? previousBible.bookCode : state.bookCode,
          chapter: newChapter || previousBible.maxChapter,
        },
      }
    }),
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

export default useBibleSearchParams
