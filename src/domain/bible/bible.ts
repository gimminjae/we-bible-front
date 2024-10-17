import { Like } from "../like/like"

export interface BibleInfo {
  bookCode: string
  chapter: number
  lang?: string
  bookCodeByLang: any
}
export interface MappedBible {
  verse: number
  content: string
  chapter: number
  bookCode: string
  like?: Like
}
