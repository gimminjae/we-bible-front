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

  const removeBracketsContent = useCallback((str: string) => {
    return str.replace(/\[.*?\]/g, "").trim()
  }, [])

  const extractFirstBracketContent = useCallback((str: string) => {
    const match = str.match(/\[.*?\]/)
    return match ? match[0] : null
  }, [])

  const isStartWithBracket = useMemo(() => content.startsWith("["), [content])

  return (
    <li>
      <div>
        {isStartWithBracket && (
          <div>
            <span className="text-blue-400" style={styleMemo}>
              {extractFirstBracketContent(content)}
            </span>
          </div>
        )}
        <div className="flex gap-3">
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
              {isStartWithBracket ? removeBracketsContent(content) : content}
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
        </div>
      </div>
    </li>
  )
}

export default memo(BibleVerse)
