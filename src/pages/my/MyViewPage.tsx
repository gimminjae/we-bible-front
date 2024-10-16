import {
  memo,
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import plan from "../../domain/plan/plan"
import useHeader from "../../hooks/useHeader"
import util from "../../util/util"
import useSelectedContent from "../../store/zustand/SelectedContent"
import { makeCopyBibles } from "../../util/bible"
import PersonIcon from "@mui/icons-material/Person"
import { Button, Tab, Tabs } from "@mui/material"
import OutlinedCard from "../../components/global/OutlinedCard"
import { Like } from "../../domain/like/like"
import { getBookName } from "../../api/bible"
import FavoriteIcon from "@mui/icons-material/Favorite"

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

  const likeDatas = [
    {
      id: "1",
      createDateTime: "2024-09-14 09:00:00",
      bible: {
        bookCode: "genesis",
        chapter: 1,
        verse: 1,
        content: "태초에.....",
      },
    },
    {
      id: "2",
      createDateTime: "2024-10-14 09:00:00",
      bible: {
        bookCode: "genesis",
        chapter: 1,
        verse: 2,
        content: "빛이 있으라 하시매.....",
      },
    },
  ]

  const likeCardData = useMemo(
    () =>
      likeDatas.map((like: Like) => ({
        title: (
          <>
            <FavoriteIcon /> {getBookName(like.bible.bookCode, "ko")}
            {`${like.bible.chapter}:${like.bible.verse}`}
          </>
        ),
        bottomSubTitle: like.createDateTime,
        content:
          like.bible.content.length > 30
            ? `${like.bible.content.substring(0, 30)}...`
            : like.bible.content,
        btnNode: (
          <>
            <Button onClick={() => console.log(like.id)}>cancel like</Button>
          </>
        ),
      })),
    [likeDatas]
  )

  return (
    <>
      <div className="flex justify-center mb-5">
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
      {tabValue === 0 && (
        <ol className="space-y-2 animate-fade-up">
          {likeCardData.map((likeCard: any, index: number) => (
            <li key={index} className="flex justify-center">
              <OutlinedCard
                className="w-[80%] h-[80%] shadow-md"
                title={likeCard?.title}
                bottomSubTitle={likeCard?.bottomSubTitle}
                content={likeCard?.content}
                btnNode={likeCard.btnNode}
              />
            </li>
          ))}
        </ol>
      )}
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
      </div> */}
    </>
  )
}
export default memo(MyViewPage)
