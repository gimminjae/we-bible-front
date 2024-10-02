import { v4 as uuid4v } from "uuid"
import util from "../../util/util"
import { bibleInfos } from "../../api/bible"
interface Goal {
  oldBibleGoal: number
  newBibleGoal: number
}
interface BiblePlanDetail {
  bibleSeq: number
  bibleCode: string
  status: number[]
}
interface Plan {
  id: string
  name: string
  goal?: Goal
  details: BiblePlanDetail[]
  percent: number
  startDate?: string
  endDate?: string
  createDateTime: string
  updateDateTime: string
}
const plan = {
  create: (
    name: string,
    goal?: Goal,
    startDate?: string,
    endDate?: string
  ): Plan => {
    const now = util.getCurrentFormattedDateTime()
    const bibles: BiblePlanDetail[] = bibleInfos.map((val) => ({
      bibleSeq: val.bookSeq,
      bibleCode: val.bookCode,
      status: Array.from({ length: val.maxChapter }).fill(0) as number[],
    }))
    const newPlan: Plan = {
      id: uuid4v(),
      name,
      goal,
      details: bibles,
      percent: 0,
      startDate,
      endDate,
      createDateTime: now,
      updateDateTime: now,
    }
    return newPlan
  },
}
export default plan
