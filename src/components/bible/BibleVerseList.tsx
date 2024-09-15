import React from "react"
import { BibleVerse } from "."

interface Props {
  bibles: any[]
}
function BibleVerseList({ bibles }: Props) {
  return (
    <ol className="space-y-2">
      {bibles &&
        bibles.length > 0 &&
        bibles.map((bible: any, idx) => (
          <BibleVerse verse={bible.verse} key={idx} content={bible.content} />
        ))}
    </ol>
  )
}

export default React.memo(BibleVerseList)
