import { memo, SyntheticEvent, useCallback, useEffect, useState } from "react"
import plan from "../../domain/plan/plan"
import useHeader from "../../hooks/useHeader"
import util from "../../util/util"
import useSelectedContent from "../../store/zustand/SelectedContent"
import { makeCopyBibles } from "../../util/bible"
import PersonIcon from "@mui/icons-material/Person"
import { Tab, Tabs } from "@mui/material"

function MyViewPage() {
  const { setMenu } = useHeader()
  const { content } = useSelectedContent()

  const [tabValue, setValue] = useState(0)

  const handleChange = useCallback(
    (event: SyntheticEvent, newValue: number) => {
      setValue(newValue)
    },
    []
  )

  useEffect(() => {
    setMenu(
      <div className="text-center">
        <PersonIcon />
        마이페이지
      </div>
    )
  }, [])

  const likeMockData = [
    {
      id: "1",
      createDateTime: "2024-09-14 09:00:00",
      bookCode: "genesis",
      chapter: 1,
      verse: 1,
      content: "태초에.....",
    },
    {
      id: "2",
      createDateTime: "2024-10-14 09:00:00",
      bookCode: "genesis",
      chapter: 1,
      verse: 2,
      content: "빛이 있으라 하시매.....",
    },
  ]

  return (
    <>
      <div className="flex justify-center">
        <Tabs
          value={tabValue}
          variant="fullWidth"
          onChange={handleChange}
          aria-label=""
        >
          <Tab label="Like" />
          <Tab label="Memo" />
        </Tabs>
      </div>
      {/* <div>
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
              util.copyContent(makeCopyBibles(content?.copyText))
          }}
        >
          copy
        </button>
      </div> */}
    </>
  )
}
export default memo(MyViewPage)
