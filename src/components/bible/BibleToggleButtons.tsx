import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import FavoriteIcon from "@mui/icons-material/Favorite"
import EditNoteIcon from "@mui/icons-material/EditNote"
import { memo, useCallback, useEffect, useState } from "react"
import util from "../../util/util"
import { makeCopyBibles } from "../../util/bible"
import useSelectedContent from "../../store/zustand/SelectedContent"
import like from "../../domain/like/like"
import useToast from "../../hooks/useToast"
import ToggleButtonsMultiple from "../global/ToggleButtonsMultiple"

function BibleToggleButtons() {
  const { content, empty } = useSelectedContent()
  const { success } = useToast()

  const copy = useCallback(() => {
    if (content?.copyText?.length)
      util.copyContent(makeCopyBibles(content?.copyText))
    empty()
    success("복사되었습니다.")
  }, [content?.copyText])

  const likeFn = useCallback(() => {
    const likeBibles = like.create(content?.copyText)
    console.log(likeBibles)
    // likeDB.saveAll(likeBibles)
    empty()
  }, [content?.copyText])

  return (
    <ToggleButtonsMultiple
      functionAndIcons={[
        { function: likeFn, icon: <FavoriteIcon />, value: "heart" },
        { function: copy, icon: <ContentCopyIcon />, value: "copy" },
        {
          function: () => {
            console.log("memo")
          },
          icon: <EditNoteIcon />,
          value: "memo",
        },
      ]}
    />
  )
}

export default memo(BibleToggleButtons)
