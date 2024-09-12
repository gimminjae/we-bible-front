import React from 'react'
import {Button, ButtonGroup} from "@mui/material";
import LangSelect from "./LangSelect";

interface Props {
  selectedLang: 'ko' | 'en'
  onLangChange: any
  book?: string
  chapter?: number
}
function BibleViewPageHeader({
  selectedLang,
  onLangChange,
  book = 'genesis',
  chapter = 1
                             }: Props) {
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
      </ButtonGroup>
      <LangSelect
        onChange={onLangChange}
        selectedLang={selectedLang}
      />
    </div>
  )
}

export default React.memo(BibleViewPageHeader)
