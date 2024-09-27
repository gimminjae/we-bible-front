import React, { useCallback, useEffect, useMemo, useState } from "react"
import bibleService from "../../api/bible"
import useApi from "../../hooks/useApi"
import useHeader from "../../hooks/useHeader"
import {
  BibleNavigationBtns,
  BibleVerseList,
  BibleViewPageHeader,
} from "../../components/bible"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"
import { useQuery } from "@tanstack/react-query"

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
  // const { callApi: getBible } = useApi({
  //   api: bibleService.getBible,
  //   onSuccess: async (data: any[]) => {
  //     setBibles(
  //       removeDuplicates(data)?.map((i: any) => ({
  //         ...i,
  //         bookName: i.book,
  //         content: i.content || i.text,
  //         chapter: i.chapter,
  //         verse: i.verse,
  //       })) || []
  //     )
  //   },
  //   onError: (error: any) => console.log(error),
  //   onComplete: () => console.log("complete"),
  // })

  // const { callApi: getSecondBible } = useApi({
  //   api: bibleService.getBible,
  //   onSuccess: async (data: any[]) => {
  //     setSecondBibles(
  //       removeDuplicates(data)?.map((i: any) => ({
  //         ...i,
  //         bookName: i.book,
  //         content: i.content || i.text,
  //         chapter: i.chapter,
  //         verse: i.verse,
  //       })) || []
  //     )
  //   },
  //   onError: (error: any) => console.log(error),
  //   onComplete: () => console.log("complete"),
  // })

  const { searchParam } = useBibleSearchParams()

  const getBibles = useCallback(
    async (param: any) => {
      const result = await bibleService.getBible(param)
      return (
        removeDuplicates(result)?.map((i: any) => ({
          ...i,
          bookName: i.book,
          content: i.content || i.text,
          chapter: i.chapter,
          verse: i.verse,
        })) || []
      )
    },
    [searchParam]
  )

  const { data: bibles, refetch: refreshBibles } = useQuery<any, Error>({
    queryKey: ["bibles"],
    queryFn: () => getBibles(searchParam),
  })

  const { data: secondBibles, refetch: refreshSecondBibles } = useQuery<
    any,
    Error
  >({
    queryKey: ["secondBibles"],
    queryFn: () => getBibles({ ...searchParam, lang: searchParam.secondLang }),
  })

  useEffect(() => {
    setMenu(<BibleViewPageHeader />)
    // getBible(searchParam)
  }, [])

  useEffect(() => {
    refreshBibles()
    if (searchParam.viewMode === "double" && searchParam.secondLang) {
      refreshSecondBibles()
    }
    // getBible(searchParam)
    // if (searchParam.viewMode === "double") {
    //   const secondSearchParam = { ...searchParam, lang: searchParam.secondLang }
    //   getSecondBible(secondSearchParam)
    // } else if (searchParam.viewMode === "single") {
    //   setSecondBibles([])
    // }
  }, [searchParam])

  useEffect(() => {
    console.log("bibles, secondBibles: ", bibles, secondBibles)
  }, [bibles, secondBibles])

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [bibles])

  return (
    <>
      <div className="m-5">
        {bibles && bibles.length > 0 && (
          <>
            <BibleVerseList bibles={bibles} secondBibles={secondBibles} />
            <BibleNavigationBtns />
          </>
        )}
      </div>
    </>
  )
}

export default BibleViewPage
