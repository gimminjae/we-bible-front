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
        bibles.map((bible: any) => (
          <BibleVerse verse={bible.verse} content={bible.content} />
        ))}
    </ol>
  )
}

export default React.memo(BibleVerseList)
