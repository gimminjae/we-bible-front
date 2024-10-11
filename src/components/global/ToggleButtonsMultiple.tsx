import FormatColorFillIcon from "@mui/icons-material/FormatColorFill"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import FavoriteIcon from "@mui/icons-material/Favorite"
import EditNoteIcon from "@mui/icons-material/EditNote"
import { memo, useCallback, useState } from "react"
import util from "../../util/util"
import { makeCopyBibles } from "../../util/bible"
import useSelectedContent from "../../store/zustand/SelectedContent"

function ToggleButtonsMultiple() {
  const [formats, setFormats] = useState(() => ["bold", "italic"])

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats)
  }
  const { content, emptyCopyText } = useSelectedContent()

  const copy = useCallback(() => {
    if (content?.copyText?.length)
      util.copyContent(makeCopyBibles(content?.copyText))
    emptyCopyText()
  }, [content?.copyText])

  return (
    <ToggleButtonGroup
      className="animate-fade-up"
      value={formats}
      exclusive
      // color="secondary"
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="heart" aria-label="heart">
        <FavoriteIcon />
      </ToggleButton>
      <ToggleButton value="memo" aria-label="memo">
        <EditNoteIcon />
      </ToggleButton>
      <ToggleButton value="copy" aria-label="copy" onClick={copy}>
        <ContentCopyIcon />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default memo(ToggleButtonsMultiple)
