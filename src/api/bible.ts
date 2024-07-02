import {api} from "../hooks/useApi";

interface BibleInfo {
  book: string,
  chapter: number,
  locale?: string
}
const bibleService = {
  getBible(params: BibleInfo) {
    if (params.locale === 'ko' || params.locale === null) {
      api.get(`https://djbe4b57ezark.cloudfront.net/bible/${params.book}/${params.chapter}.json`)
    } else {

    }
  }
}

export default bibleService
