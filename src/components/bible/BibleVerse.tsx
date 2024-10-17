import { memo, useCallback, useEffect, useMemo } from "react"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"
import useSelectedContent from "../../store/zustand/SelectedContent"
import { getBookName } from "../../api/bible"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { Like } from "../../domain/like/like"
import { pink } from "@mui/material/colors"

interface Props {
  verse: number
  content: string
  secondContent?: string
  like?: Like
}
function BibleVerse({ verse, content, secondContent, like }: Props) {
  const { searchParam } = useBibleSearchParams()
  const fontSize = `${searchParam.fontSize}px`

  const { content: selectedContent, add: addCopyText } = useSelectedContent()

  const handleClickVerse = useCallback(
    (e: any) => {
      const { id, innerText } = e.target
      const obj = {
        verse,
        content,
        chapter: searchParam.chapter,
        bookName: getBookName(searchParam.bookCode, searchParam.lang),
        bookCode: searchParam.bookCode,
      }
      if (id && innerText) addCopyText(obj)
    },
    [searchParam, addCopyText, verse, content]
  )

  const idVerse = useMemo(() => verse?.toString() || "", [verse])

  const styleMemo = useMemo(() => ({ fontSize }), [fontSize])

  const isDoubleMode = useMemo(
    () => secondContent && searchParam.viewMode === "double",
    [searchParam.viewMode, secondContent]
  )

  const isSelectedVerse = useMemo(
    () =>
      !!selectedContent?.copyText?.some(
        (content: any) => content.verse === verse
      ),
    [selectedContent?.copyText, verse]
  )

  return (
    <li className="flex gap-3">
      <span className="w-[10%] text-center" style={styleMemo}>
        <div>{verse}</div>
        {like && (
          <div>
            <FavoriteIcon sx={{ color: pink[300] }} />
          </div>
        )}
      </span>
      <div className="w-[90%]">
        <p
          className={`${isSelectedVerse ? "dotted-underline" : ""}`}
          style={styleMemo}
          id={idVerse}
          onClick={handleClickVerse}
        >
          {content}
        </p>
        {isDoubleMode && (
          <p
            id={idVerse}
            className="text-gray-400"
            style={styleMemo}
            onClick={handleClickVerse}
          >
            {secondContent}
          </p>
        )}
      </div>
    </li>
  )
}

export default memo(BibleVerse)
