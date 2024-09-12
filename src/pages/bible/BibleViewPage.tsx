import React, {useEffect, useMemo, useState} from "react"
import bibleService from "../../api/bible"
import useApi from "../../hooks/useApi"
import { Button } from "@mui/material"
import useHeader from "../../hooks/useHeader";

function BibleViewPage() {
  const header = useMemo(() => (
    <div>
      <Button onClick={() => console.log('click header')}>
        header
      </Button>
      <Button onClick={() => console.log('click header2')}>
        header2
      </Button>
    </div>
  ), [])
  const { setMenu } = useHeader()
  const { callApi: getBible } = useApi({
    api: bibleService.getBible,
    onSuccess: async (data: any) => {
      setBibles(
        data?.map((i: any) => ({
          ...i,
          bookName: i.book,
          content: i.content || i.text,
          chapter: i.chapter,
          verse: i.verse,
        })) || []
      )
    },
    onError: (error: any) => console.log(error),
    onComplete: () => console.log("complete"),
  })

  const [bibles, setBibles] = useState<any[]>()

  useEffect(() => {
    setMenu(header)
  }, [])
  useEffect(() => {
    console.log(bibles)
  }, [bibles])
  return (
    <>
      <div>bible view page</div>
      <div className="flex gap-3">
        <Button onClick={() => getBible({ book: 1, chapter: 1, locale: "en" })}>
          en
        </Button>
        <Button onClick={() => getBible({ book: 1, chapter: 1, locale: "ko" })}>
          ko
        </Button>
      </div>
      <ol>
        {bibles &&
          bibles.length > 0 &&
          bibles.map((bible: any) => (
            <li>
              {bible.verse} {bible.content}
            </li>
          ))}
      </ol>
    </>
  )
}

export default BibleViewPage
