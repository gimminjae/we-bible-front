import { memo, useCallback, useEffect, useMemo } from "react"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"
import useSelectedContent from "../../store/zustand/SelectedContent"
import { getBookName } from "../../api/bible"

interface Props {
  verse: number
  content: string
  secondContent?: string
}
function BibleVerse({ verse, content, secondContent }: Props) {
  const { searchParam } = useBibleSearchParams()
  const fontSize = `${searchParam.fontSize}px`

  const { content: selectedContent, addCopyText } = useSelectedContent()

  const handleClickVerse = useCallback(
    (e: any) => {
      const { id, innerText } = e.target
      const obj = {
        verse,
        content,
        chapter: searchParam.chapter,
        bookName: getBookName(searchParam.bookCode, searchParam.lang),
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
      <span style={styleMemo}>{verse}</span>
      <div>
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
