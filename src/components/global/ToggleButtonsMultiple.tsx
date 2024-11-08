import FormatColorFillIcon from "@mui/icons-material/FormatColorFill"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { memo, useCallback, useEffect, useState, ReactNode } from "react"

interface BibleToggleButtonsProps {
  function: (value?: any) => void | any
  icon: ReactNode
  value: string
}
interface Props {
  functionAndIcons: BibleToggleButtonsProps[]
  bgColor?:
    | "primary.main"
    | "secondary.main"
    | "error.main"
    | "warning.main"
    | "info.main"
    | "success.main"
    | "text.primary"
    | "text.secondary"
    | "text.disabled"
    | string
}
function ToggleButtonsMultiple({
  bgColor = "text.disabled",
  functionAndIcons,
}: Props) {
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
      exclusive
      // color="primary"
      onChange={handleFormat}
      aria-label="text formatting"
      sx={{
        boxShadow: 1,
        opacity: 0.5,
        bgcolor: bgColor,
      }}
    >
      {functionAndIcons.map((obj, index: number) => (
        <ToggleButton
          key={index}
          value={obj.value}
          aria-label={obj.value}
          onClick={obj.function}
        >
          {obj.icon}
        </ToggleButton>
      ))}
      <ToggleButton value="color" aria-label="color" disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default memo(ToggleButtonsMultiple)
