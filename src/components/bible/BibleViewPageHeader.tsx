import React, {useEffect} from 'react'
import {Button, ButtonGroup} from "@mui/material";
import LangSelect from "./LangSelect";
import useBibleSearchParams from "../../store/zustand/BibleSearchParams";
import {setCookie} from "../../util/cookie";

interface Props {
  selectedLang: 'ko' | 'en'
  onLangChange: any
  book?: string
  chapter?: number
}
function BibleViewPageHeader() {
  const book = 'genesis'
  const chapter = 1
  const bibleSearchParam = useBibleSearchParams()

  useEffect(() => {
    setCookie('bibleSearchParam', JSON.stringify(bibleSearchParam.searchParam))
  }, [bibleSearchParam.searchParam])
  return (
    <div className='flex justify-between m-2'>
      <ButtonGroup
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        disableElevation
        // variant="contained"
        aria-label="Disabled button group"
      >
        <Button>{book}</Button>
        <Button>{chapter}</Button>
        <Button onClick={() => bibleSearchParam.next()}>next</Button>
        <Button onClick={() => bibleSearchParam.previous()}>previous</Button>
      </ButtonGroup>
      <LangSelect/>
      <p>{bibleSearchParam?.searchParam?.chapter || ''}</p>
    </div>
  )
}

export default React.memo(BibleViewPageHeader)
