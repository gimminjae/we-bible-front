import util from "../../util/util"

export interface Bible {
  verse: number
  content: string
  chapter: number
  bookCode: string
}
export interface Like {
  id?: string | null
  bible: Bible
  createDateTime: string
  memberId?: string | null
}

const like = {
  create: (bibles: Bible[]) => {
    return bibles.map((bible: Bible) => ({
      id: null,
      bible,
      createDateTime: util.getCurrentFormattedDateTime(),
    }))
  },
}
export default like
