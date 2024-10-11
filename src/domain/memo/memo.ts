import { BibleInfo } from "../../api/bible"

export interface Memo {
  id?: string
  bibles: BibleInfo[]
  memo?: string
}

const memo = {}

export default memo
