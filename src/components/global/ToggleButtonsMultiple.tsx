import FormatColorFillIcon from "@mui/icons-material/FormatColorFill"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import FavoriteIcon from "@mui/icons-material/Favorite"
import EditNoteIcon from "@mui/icons-material/EditNote"
import { memo, useState } from "react"

function ToggleButtonsMultiple() {
  const [formats, setFormats] = useState(() => ["bold", "italic"])

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats)
  }

  return (
    <ToggleButtonGroup
      className="animate-fade-up"
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FavoriteIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <EditNoteIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
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
