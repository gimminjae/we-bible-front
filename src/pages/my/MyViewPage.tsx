import { memo, useEffect } from "react"
import plan from "../../domain/plan/plan"
import useHeader from "../../hooks/useHeader"
import util from "../../util/util"
import useSelectedContent from "../../store/zustand/SelectedContent"
import { makeCopyText } from "../../util/bible"

function MyViewPage() {
  const { setMenu } = useHeader()
  const { content } = useSelectedContent()

  useEffect(() => {
    setMenu(<>마이페이지</>)
  }, [])

  return (
    <>
      <div>
        my page
        <button
          onClick={() => {
            const newPlan = plan.create(
              "test",
              { oldBibleGoal: 1, newBibleGoal: 1 },
              "2024-09-01",
              "2024-09-11"
            )
            console.log("newPlan: ", newPlan)
          }}
        >
          click
        </button>
        <button
          onClick={() => {
            if (content?.copyText)
              util.copyContent(makeCopyText(content?.copyText))
          }}
        >
          copy
        </button>
      </div>
    </>
  )
}
export default memo(MyViewPage)
