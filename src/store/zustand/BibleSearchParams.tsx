import { create } from 'zustand'

type BibleSearchParam = {
  bookCode: string
  chapter: number
  lang: 'ko' | 'en' | string
}
// type Store = {
//   searchParam: BibleSearchParam
//   set: any
// }

const useBibleSearchParams = create((set) => ({
  searchParam: {
    bookCode: 'genesis',
    chapter: 1,
    lang: 'ko'
  },
  set: (state: BibleSearchParam) => set(() => ({
    searchParam: {
      bookCode: state.bookCode,
      chapter: state.chapter,
      ko: state.lang
    }
  })),
  next: () => set((state: BibleSearchParam) => ({
    searchParam: {
      chapter: state.chapter + 1,
    }
  })),
  previous: () => set((state: BibleSearchParam) => ({
    searchParam: {
      chapter: state.chapter - 1,
    }
  })),
  changeLang: (lang: string) => set(() => ({
    searchParam: {
      lang
    }
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
