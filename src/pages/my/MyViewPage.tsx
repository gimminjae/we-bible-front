import {
  memo,
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import useHeader from "../../hooks/useHeader"
import useSelectedContent from "../../store/zustand/SelectedContent"
import PersonIcon from "@mui/icons-material/Person"
import { Button, Tab, Tabs } from "@mui/material"
import OutlinedCard from "../../components/global/OutlinedCard"
import { Like } from "../../domain/like/like"
import { getBookName } from "../../api/bible"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useQuery } from "@tanstack/react-query"
import { likeService } from "../../api"
import { pink } from "@mui/material/colors"

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

  const { data: likeDatas, refetch: refreshLikes } = useQuery<any, Error>({
    queryKey: ["likes"],
    queryFn: () => likeService?.getLikesByMemberId(),
  })

  const likeCardData = useMemo(
    () =>
      likeDatas?.map((like: Like) => ({
        title: (
          <>
            <FavoriteIcon sx={{ color: pink[300] }} />{" "}
            {getBookName(like.bible.bookCode, "ko")}
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
      })) || [],
    [likeDatas]
  )

  return (
    <>
      <div className="flex justify-center mb-1 shadow-md">
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
        <div className="overflow-y-scroll h-[75vh] space-y-2 animate-fade-up">
          {likeCardData.map((likeCard: any, index: number) => (
            <div key={index} className="flex justify-center">
              <OutlinedCard
                className="w-[80%] h-[80%] shadow-md"
                title={likeCard?.title}
                bottomSubTitle={likeCard?.bottomSubTitle}
                content={likeCard?.content}
                btnNode={likeCard.btnNode}
              />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default memo(MyViewPage)
