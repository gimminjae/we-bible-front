import plan from "../../domain/plan/plan"

function MyViewPage() {
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
