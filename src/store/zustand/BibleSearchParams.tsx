import { create } from "zustand"
import { getCookie } from "../../util/cookie"

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

const bibleSearchParamFromCookie = getCookie("bibleSearchParam")

const useBibleSearchParams = create<Store>((set: any) => ({
  searchParam: bibleSearchParamFromCookie || initialValue,
  next: () =>
    set(({ searchParam: state }: { searchParam: BibleSearchParam }) => ({
      searchParam: {
        ...state,
        chapter: state.chapter + 1,
      },
    })),
  previous: () =>
    set(({ searchParam: state }: { searchParam: BibleSearchParam }) => ({
      searchParam: {
        ...state,
        chapter: state.chapter - 1,
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
