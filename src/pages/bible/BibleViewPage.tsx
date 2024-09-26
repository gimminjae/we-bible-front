import React, { useEffect, useState } from "react"
import bibleService from "../../api/bible"
import useApi from "../../hooks/useApi"
import useHeader from "../../hooks/useHeader"
import {
  BibleNavigationBtns,
  BibleVerseList,
  BibleViewPageHeader,
} from "../../components/bible"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"

function BibleViewPage() {
  const removeDuplicates = (arr: any) => {
    const seen = new Set()
    return arr.filter((item: any) => {
      const duplicate = seen.has(item.verse)
      seen.add(item.verse)
      return !duplicate
    })
  }
  const { setMenu } = useHeader()
  const { callApi: getBible } = useApi({
    api: bibleService.getBible,
    onSuccess: async (data: any[]) => {
      setBibles(
        removeDuplicates(data)?.map((i: any) => ({
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

  const { searchParam } = useBibleSearchParams()

  const [bibles, setBibles] = useState<any[]>([])

  useEffect(() => {
    setMenu(<BibleViewPageHeader />)
    getBible(searchParam)
  }, [])

  useEffect(() => {
    getBible(searchParam)
  }, [searchParam])

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [bibles])

  return (
    <>
      <div className="m-5">
        <BibleVerseList bibles={bibles} />
        <BibleNavigationBtns />
      </div>
    </>
  )
}

export default BibleViewPage
