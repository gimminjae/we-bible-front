import React from "react"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"

interface Props {
  verse: number
  content: string
  secondContent?: string
}
function BibleVerse({ verse, content, secondContent }: Props) {
  const { searchParam } = useBibleSearchParams()
  const fontSize = `${searchParam.fontSize}px`
  return (
    <li className="flex gap-3">
      <span style={{ fontSize }}>{verse}</span>
      <div>
        <p style={{ fontSize }}>{content}</p>
        {secondContent && searchParam.viewMode === "double" && (
          <p style={{ fontSize }}>{secondContent}</p>
        )}
      </div>
    </li>
  )
}

export default React.memo(BibleVerse)
