import React from "react"

interface Props {
  verse: number
  content: string
}
function BibleVerse({ verse, content }: Props) {
  return (
    <li>
      {verse} {content}
    </li>
  )
}

export default React.memo(BibleVerse)
