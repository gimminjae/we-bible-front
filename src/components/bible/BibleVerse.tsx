import React from "react"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"

interface Props {
  verse: number
  content: string
}
function BibleVerse({ verse, content }: Props) {
  const { searchParam } = useBibleSearchParams()
  const fontSize = `${searchParam.fontSize}px`
  return (
    <li className="flex gap-3">
      <span style={{ fontSize }}>{verse}</span>
      <p style={{ fontSize }}>{content}</p>
    </li>
  )
}

export default React.memo(BibleVerse)
