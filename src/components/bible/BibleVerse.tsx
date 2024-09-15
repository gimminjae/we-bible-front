import React from "react"

interface Props {
  verse: number
  content: string
}
function BibleVerse({ verse, content }: Props) {
  return (
    <li className="flex gap-3">
      <span>{verse}</span>
      <p>{content}</p>
    </li>
  )
}

export default React.memo(BibleVerse)
