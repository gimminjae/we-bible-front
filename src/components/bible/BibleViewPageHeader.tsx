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
import { ButtonGroup, Grid, Paper, styled } from "@mui/material"
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
  const { searchParam, changeLang } = useBibleSearchParams()
  const [state, setState] = useState({
    bottom: false,
  })
  const [langState, setLangState] = useState({
    bottom: false,
  })
  const [newSearchParam, setNewSearchParam] = useState({
    bookCode: "",
    chapter: 0,
  })

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (open) setNewSearchParam({ bookCode: "", chapter: 0 })
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
  const toggleDrawerLang =
    (anchor: string, open: boolean, lang?: string) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      changeLang(lang)
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }))

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {!newSearchParam.bookCode && (
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
                    onClick={() =>
                      setNewSearchParam((prev) => ({
                        ...prev,
                        bookCode: info.bookCode,
                      }))
                    }
                    primary={getBookName(info.bookCode, searchParam.lang)}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
      {newSearchParam.bookCode && (
        <Grid container spacing={1}>
          {Array.from(
            {
              length:
                bibleInfos.find(
                  (info) => info.bookCode === newSearchParam.bookCode
                )?.maxChapter || 0,
            },
            (_, i) => i + 1
          ).map((val, idx) => (
            <Item key={idx}>{val}</Item>
          ))}
        </Grid>
      )}
    </Box>
  )
  const langList = () => (
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
      </div>
    </>
  )
}

export default React.memo(BibleViewPageHeader)
