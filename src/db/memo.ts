import { Memo } from "../domain/memo/memo"
import util from "../util/util"

const memo = {
  save: (memo: Memo) => {
    if (memo?.id) {
      memo.id = util.createId()
      // create
    } else {
      // update
    }
  },
  findById: (id: string) => {},
  findAll: () => {},
  delete: (id: string) => {},
}

export default memo
