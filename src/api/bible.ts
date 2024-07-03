import {api} from "../hooks/useApi";

interface BibleInfo {
  book: string,
  chapter: number,
  locale?: string
}
const bibleService = {
  getBible(params: BibleInfo) {
    if (params.locale === 'ko' || params.locale === null) {
      api.get(`https://u0bcvttz8k.execute-api.ap-northeast-2.amazonaws.com/dev/bible?book=${params.book}&chapter=${params.chapter}`)
    } else {

    }
  }
}

export default bibleService
