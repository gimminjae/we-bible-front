import React from "react"
import useHeader from "../../hooks/useHeader"
import { Paper, Slide, useScrollTrigger } from "@mui/material"

function Header({ ...props }) {
  const { header } = useHeader()
  const trigger = useScrollTrigger({
    target: window,
  })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <Paper sx={{ position: "fixed", top: 0, left: 0, right: 0 }} {...props}>
        {header}
      </Paper>
    </Slide>
  )
}
export default React.memo(Header)
