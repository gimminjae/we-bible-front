import React, { useEffect } from "react"
import { Button, ButtonGroup } from "@mui/material"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"
import { setCookie } from "../../util/cookie"
import { LangSelect } from "."

interface Props {
  selectedLang: "ko" | "en"
  onLangChange: any
  book?: string
  chapter?: number
}
function BibleViewPageHeader() {
  const book = "genesis"
  const chapter = 1
  const { searchParam } = useBibleSearchParams()

  useEffect(() => {
    setCookie("bibleSearchParam", JSON.stringify(searchParam))
  }, [searchParam])
  return (
    <div className="flex justify-between m-2">
      <ButtonGroup
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        disableElevation
        // variant="contained"
        aria-label="Disabled button group"
      >
        <Button>{searchParam.bookCode}</Button>
        <Button>{searchParam.chapter}</Button>
      </ButtonGroup>
      <LangSelect />
    </div>
  )
}

export default React.memo(BibleViewPageHeader)
