import { Like } from "../domain/like/like"
import util from "../util/util"

const makeLikeDBRow = (like: Like) => ({
  id: like.id,
  createDateTime: util.getCurrentFormattedDateTime(),
  verse: like.bible.verse,
  content: like.bible.content,
  chapter: like.bible.chapter,
  bookCode: like.bible.bookCode,
})
const likeDB = {
  save: (like: Like) => {
    if (like?.id) {
      like.id = util.createId()
      // create
    } else {
      // update
    }
    console.log("like: ", like)
  },
  saveAll: (likes: Like[]) => {
    const updateList = likes
      ?.filter((like: Like) => like?.id)
      .map((like: Like) => makeLikeDBRow(like))
    const createList = likes
      ?.filter((like: Like) => !like?.id)
      .map((like: Like) => ({
        ...like,
        id: util.createId(),
      }))
      .map((like: Like) => makeLikeDBRow(like))
    console.log(createList, updateList)
    util.postMessage("DB", {
      table: "like",
      command: "create",
      data: createList,
    })
    util.postMessage("DB", {
      table: "like",
      command: "update",
      data: updateList,
    })
  },
  findById: (id: string) => {},
  findAll: () => {},
  delete: (id: string) => {},
}

export default likeDB
