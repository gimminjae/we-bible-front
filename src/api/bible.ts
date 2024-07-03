import {api} from "../hooks/useApi";

interface BibleInfo {
  book: string,
  chapter: number,
  locale?: string
}
const bibleService = {
  getBible(params: BibleInfo) {
    if (params.locale === 'ko' || params.locale === null) {
      api.get(`/dev/bible?book=${params.book}&chapter=${params.chapter}`)
    } else {

    }
  }
}

export default bibleService
