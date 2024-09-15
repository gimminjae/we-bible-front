import React, { useEffect, useState } from "react"
import { setCookie } from "../../util/cookie"
import { LangSelect } from "."
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { ButtonGroup } from "@mui/material"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"
import { bibleInfos, getBookName } from "../../api/bible"
import CancelIcon from "@mui/icons-material/Cancel"

interface Props {
  selectedLang: "ko" | "en"
  onLangChange: any
  book?: string
  chapter?: number
}
function BibleViewPageHeader() {
  const { searchParam } = useBibleSearchParams()
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {bibleInfos?.map((info, index) => (
          <ListItem key={info.bookCode} disablePadding>
            <ListItemButton>
              {!index ? (
                <>
                  <ListItemText
                    onClick={toggleDrawer(anchor, false)}
                    className="text-center"
                  >
                    <CancelIcon />
                  </ListItemText>
                </>
              ) : (
                <ListItemText
                  onClick={(e) => console.log(e)}
                  primary={getBookName(info.bookCode, searchParam.lang)}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
  useEffect(() => {
    setCookie("bibleSearchParam", JSON.stringify(searchParam))
  }, [searchParam])

  return (
    <>
      <div className="flex justify-between m-2">
        <ButtonGroup
          sx={{ m: 1, minWidth: 120 }}
          size="small"
          disableElevation
          // variant="contained"
          aria-label="Disabled button group"
        >
          <Button onClick={toggleDrawer("bottom", true)}>
            {getBookName(searchParam.bookCode, searchParam.lang)}
          </Button>
          <SwipeableDrawer
            anchor={"bottom"}
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
            onOpen={toggleDrawer("bottom", true)}
          >
            {list("bottom")}
          </SwipeableDrawer>
          <Button onClick={toggleDrawer("bottom", true)}>
            {searchParam.chapter}
          </Button>
        </ButtonGroup>
        <LangSelect />
      </div>
    </>
  )
}

export default React.memo(BibleViewPageHeader)
