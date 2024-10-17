import { BibleInfo } from "../bible/bible"

export interface Memo {
  id?: string
  bibles: BibleInfo[]
  memo?: string
}

const memo = {}

export default memo
