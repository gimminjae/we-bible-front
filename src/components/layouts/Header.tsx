import React from "react"
import useHeader from "../../hooks/useHeader"
import { Paper } from "@mui/material"

function Header({ ...props }) {
  const { header } = useHeader()
  return (
    <Paper sx={{ position: "fixed", top: 0, left: 0, right: 0 }} {...props}>
      {header}
    </Paper>
  )
}
export default React.memo(Header)
