import { useEffect } from "react"
import plan from "../../domain/plan/plan"
import useHeader from "../../hooks/useHeader"

function MyViewPage() {
  const { setMenu } = useHeader()

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
      </div>
    </>
  )
}
export default MyViewPage
