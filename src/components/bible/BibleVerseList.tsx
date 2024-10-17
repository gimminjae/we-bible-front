import { memo } from "react"
import { BibleVerse } from "."

interface Props {
  bibles: any[]
  secondBibles: any[]
}
function BibleVerseList({ bibles, secondBibles }: Props) {
  return (
    <ol className="space-y-2">
      {bibles &&
        bibles.length > 0 &&
        bibles.map((bible: any, idx) => (
          <BibleVerse
            verse={bible.verse}
            secondContent={
              (secondBibles?.length > 0 && secondBibles[idx]?.content) || ""
            }
            key={idx}
            content={bible.content}
            like={bible?.like}
          />
        ))}
    </ol>
  )
}

export default memo(BibleVerseList)
