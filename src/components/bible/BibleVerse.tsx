import React, { useCallback, useEffect, useMemo } from "react"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"
import useSelectedContent from "../../store/zustand/SelectedContent"

interface Props {
  verse: number
  content: string
  secondContent?: string
}
function BibleVerse({ verse, content, secondContent }: Props) {
  const { searchParam } = useBibleSearchParams()
  const fontSize = `${searchParam.fontSize}px`

  const { addCopyText } = useSelectedContent()

  const handleClickVerse = useCallback((e: any) => {
    const { id, innerText } = e.target
    console.log(e)
    if (id && innerText) addCopyText(`${innerText} ${id}절`)
  }, [])

  const idVerse = useMemo(() => verse?.toString() || "", [verse])

  const styleMemo = useMemo(() => ({ fontSize }), [fontSize])

  const isDoubleMode = useMemo(
    () => secondContent && searchParam.viewMode === "double",
    [searchParam.viewMode, secondContent]
  )

  return (
    <li className="flex gap-3">
      <span style={styleMemo}>{verse}</span>
      <div>
        <p style={styleMemo} id={idVerse} onClick={handleClickVerse}>
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

export default React.memo(BibleVerse)
