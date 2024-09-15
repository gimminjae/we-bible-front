import { IconButton } from "@mui/material"
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import { memo } from "react"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"

function BibleNavigationBtns() {
  const { next, previous } = useBibleSearchParams()
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
