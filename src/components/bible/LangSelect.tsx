import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"

interface Props {
  selectedLang: "ko" | "en"
  onChange: any
}
function LangSelect() {
  const { searchParam, changeLang } = useBibleSearchParams()
  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target
    changeLang(value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Language</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={searchParam.lang}
        label="Language"
        onChange={handleChange}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        <MenuItem value="ko">한국어</MenuItem>
        <MenuItem value="en">English</MenuItem>
      </Select>
    </FormControl>
  )
}
export default React.memo(LangSelect)
