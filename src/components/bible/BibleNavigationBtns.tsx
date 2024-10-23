import { IconButton } from "@mui/material"
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import { memo, useMemo } from "react"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"
import BibleToggleButtons from "./BibleToggleButtons"
import useSelectedContent from "../../store/zustand/SelectedContent"

function BibleNavigationBtns() {
  const { next, previous } = useBibleSearchParams()
  const { content } = useSelectedContent()
  const existSelectedVerses = useMemo(
    () => content?.copyText?.length > 0,
    [content?.copyText]
  )
  return (
    <>
      <div className="w-full flex justify-between sticky bottom-[10%]">
        <IconButton
          onClick={previous}
          color="primary"
          aria-label="add to shopping cart"
        >
          <ArrowCircleLeftIcon sx={{ fontSize: 40 }} />
        </IconButton>
        {existSelectedVerses && <BibleToggleButtons />}
        <IconButton
          onClick={next}
          color="primary"
          aria-label="add to shopping cart"
        >
          <ArrowCircleRightIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </div>
    </>
  )
}

export default memo(BibleNavigationBtns)
