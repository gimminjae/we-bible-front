import React, { useCallback, useEffect, useState } from "react"
import { setCookie } from "../../util/cookie"
import { LangSelect } from "."
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  ButtonGroup,
  Grid,
  Paper,
  Slider,
  styled,
} from "@mui/material"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"
import { bibleInfos, getBookName } from "../../api/bible"
import CancelIcon from "@mui/icons-material/Cancel"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { BorderColor } from "@mui/icons-material"

interface Props {
  selectedLang: "ko" | "en"
  onLangChange: any
  book?: string
  chapter?: number
}
function BibleViewPageHeader() {
  const { searchParam, changeLang, set, changeFontSize } =
    useBibleSearchParams()
  const [state, setState] = useState({
    bottom: false,
  })
  const [langState, setLangState] = useState({
    bottom: false,
  })
  const [fontState, setFontState] = useState({
    right: false,
  })

  const toggleDrawer =
    (anchor: string, open: boolean, bookCode?: string, chapter?: number) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (bookCode && chapter) set(bookCode, chapter)
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState((prev) => ({ ...prev, [anchor]: open }))
    }
  const toggleDrawerFontSize =
    (anchor: string, open: boolean, bookCode?: string, chapter?: number) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (bookCode && chapter) set(bookCode, chapter)
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setFontState((prev) => ({ ...prev, [anchor]: open }))
    }
  const toggleDrawerLang =
    (anchor: string, open: boolean, lang?: string) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (lang) changeLang(lang)
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setLangState((prev) => ({ ...prev, [anchor]: open }))
    }

  const rectangle = useCallback(
    (text: any) => (
      <Box
        component="button"
        sx={{
          bgcolor: "info.main",
          width: 40,
          height: 40,
          borderRadius: "10%",
        }}
        className="text-center"
      >
        {text}
      </Box>
    ),
    []
  )

  const list = useCallback(
    (anchor: string) => (
      <Box
        sx={{ width: anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <ListItemText
          onClick={toggleDrawer(anchor, false)}
          className="text-center"
        >
          <CancelIcon />
        </ListItemText>
        {bibleInfos.map(
          (info, index) =>
            index > 0 && (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {getBookName(info.bookCode, searchParam.lang)}
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction="row"
                    sx={{
                      // justifyContent: "space-around",
                      alignItems: "flex-start",
                    }}
                    spacing={2}
                    wrap="wrap"
                  >
                    {Array.from(
                      { length: info.maxChapter },
                      (_, i) => i + 1
                    ).map((el, index) => (
                      <Grid item key={index} xs>
                        <Badge
                          color="secondary"
                          onClick={toggleDrawer(
                            "bottom",
                            false,
                            info.bookCode,
                            el
                          )}
                        >
                          {rectangle(el)}
                        </Badge>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            )
        )}
      </Box>
    ),
    []
  )
  const langList = useCallback(
    () => (
      <Box
        sx={{ width: "auto" }}
        role="presentation"
        onKeyDown={toggleDrawerLang("bottom", false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                onClick={toggleDrawerLang("bottom", false)}
                className="text-center"
              >
                <CancelIcon />
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {[
            { txt: "한국어", val: "ko" },
            { txt: "English", val: "en" },
          ].map((el, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton>
                <ListItemText
                  onClick={toggleDrawerLang("bottom", false, el.val)}
                  primary={el.txt}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    ),
    []
  )
  function valuetext(value: number) {
    return `${value}`
  }
  const fontSize = useCallback(
    (anchor: string) => (
      <Box
        sx={{ width: "auto" }}
        onKeyDown={toggleDrawerFontSize(anchor, false)}
      >
        <ListItemButton>
          <ListItemText
            onClick={toggleDrawerFontSize("bottom", false)}
            className="text-center"
          >
            <CancelIcon />
          </ListItemText>
        </ListItemButton>
        <Slider
          className="my-10"
          aria-label="Temperature"
          // defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          shiftStep={30}
          step={5}
          marks
          value={searchParam.fontSize}
          onChange={(e: any) => changeFontSize(e?.target?.value)}
          min={10}
          max={50}
        />
      </Box>
    ),
    [searchParam.fontSize]
  )

  useEffect(() => {
    setCookie("bibleSearchParam", JSON.stringify(searchParam))
  }, [searchParam])

  return (
    <>
      <div className="flex justify-between content-center">
        <ButtonGroup
          sx={{ m: 1, minWidth: 120 }}
          size="small"
          disableElevation
          // variant="contained"
          aria-label="Disabled button group"
        >
          <Button onClick={toggleDrawer("bottom", true)}>
            {`${getBookName(searchParam.bookCode, searchParam.lang)} ${
              searchParam.chapter
            }`}
          </Button>
          <SwipeableDrawer
            id="bible"
            anchor={"bottom"}
            open={state.bottom}
            onClose={toggleDrawer("bottom", false)}
            onOpen={toggleDrawer("bottom", true)}
          >
            {list("bottom")}
          </SwipeableDrawer>
          <SwipeableDrawer
            id="lang"
            anchor={"bottom"}
            open={langState.bottom}
            onClose={toggleDrawerLang("bottom", false)}
            onOpen={toggleDrawerLang("bottom", true)}
          >
            {langList()}
          </SwipeableDrawer>
          <Button onClick={toggleDrawerLang("bottom", true)}>
            {searchParam.lang}
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            sx={{ m: 1, minWidth: 120 }}
            size="small"
            onClick={toggleDrawerFontSize("right", true)}
          >
            abc
          </Button>
        </ButtonGroup>
        <SwipeableDrawer
          id="lang"
          anchor={"bottom"}
          open={fontState.right}
          onClose={toggleDrawerFontSize("right", false)}
          onOpen={toggleDrawerFontSize("right", true)}
        >
          {fontSize("right")}
        </SwipeableDrawer>
      </div>
    </>
  )
}

export default React.memo(BibleViewPageHeader)
