import { memo, useCallback, useEffect, useMemo, useState } from "react"
import useHeader from "../../hooks/useHeader"
import {
  BibleNavigationBtns,
  BibleVerseList,
  BibleViewPageHeader,
} from "../../components/bible"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"
import { useQuery } from "@tanstack/react-query"
import useSelectedContent from "../../store/zustand/SelectedContent"
import { bibleService, likeService } from "../../api"
import { Bible, Like } from "../../domain/like/like"

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

  const { searchParam } = useBibleSearchParams()
  const { content: selectedContent, empty: emptyCopyText } =
    useSelectedContent()

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

  const { data: likes, refetch: refreshLikes } = useQuery<Like[], Error>({
    queryKey: ["likes"],
    queryFn: () =>
      likeService.getLikesByBookCodeAndChapterAndMemberId(
        searchParam?.bookCode,
        searchParam?.chapter
      ),
  })

  const { data: bibles, refetch: refreshBibles } = useQuery<Bible[], Error>({
    queryKey: ["bibles"],
    queryFn: () => getBibles(searchParam),
  })

  interface MappedBible {
    verse: number
    content: string
    chapter: number
    bookCode: string
    like?: Like
  }

  const resultBibles: MappedBible[] = useMemo(
    () =>
      bibles?.map((bible: Bible) => ({
        ...bible,
        like: likes?.find((like: Like) => like?.bible?.verse === bible?.verse),
      })) || [],
    [likes, bibles]
  )

  const { data: secondBibles, refetch: refreshSecondBibles } = useQuery<
    any,
    Error
  >({
    queryKey: ["secondBibles"],
    queryFn: () => getBibles({ ...searchParam, lang: searchParam.secondLang }),
  })

  useEffect(() => {
    setMenu(<BibleViewPageHeader />)
  }, [])

  useEffect(() => {
    refreshBibles()
    if (searchParam.viewMode === "double" && searchParam.secondLang) {
      refreshSecondBibles()
    }
    emptyCopyText()
  }, [searchParam])

  useEffect(() => {
    refreshLikes()
  }, [searchParam])

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [bibles])

  return (
    <>
      <div className="m-5">
        {bibles && bibles.length > 0 && (
          <>
            <BibleVerseList bibles={resultBibles} secondBibles={secondBibles} />
            <div className="text-center p-10 m-10 text-gray-500">We Bible</div>
            <BibleNavigationBtns />
          </>
        )}
      </div>
    </>
  )
}

export default memo(BibleViewPage)
