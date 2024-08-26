import React, { useEffect, useState } from "react"
import bibleService from "../../api/bible"
import useApi from "../../hooks/useApi"
import { Button } from "@mui/material"

function BibleViewPage() {
  const { callApi: getBible } = useApi({
    api: bibleService.getBible,
    onSuccess: async (data: any) => {
      console.log("data: ", data)
      setBibles(
        data
          ? data.map((i: any) => ({
              bookName: i.book,
              content: i.text,
              chapter: i.chapter,
              verse: i.verse,
            }))
          : data
      )
    },
    onError: (error: any) => console.log(error),
    onComplete: () => console.log("complete"),
  })

  const [bibles, setBibles] = useState<any[]>()

  useEffect(() => {
    // getBible({ book: 1, chapter: 1, locale: "ko" });
    // getBible({ book: 1, chapter: 1, locale: "en" });
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
