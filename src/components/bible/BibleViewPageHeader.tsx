import React, { memo, useCallback, useEffect, useMemo, useState } from "react"
import { setCookie } from "../../util/cookie"
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
  AppBar,
  Badge,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "@mui/material"
import TextFieldsIcon from "@mui/icons-material/TextFields"
import useBibleSearchParams from "../../store/zustand/BibleSearchParams"
import { bibleInfos, getBookName, versions } from "../../api/bible"
import CancelIcon from "@mui/icons-material/Cancel"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTheme } from "@mui/material/styles"

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}
interface Props {
  selectedLang: "ko" | "en" | "de"
  onLangChange: any
  book?: string
  chapter?: number
}
function BibleViewPageHeader() {
  const {
    searchParam,
    changeLang,
    set,
    changeFontSize,
    changeViewMode,
    changeSecondLang,
  } = useBibleSearchParams()
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
          // bgcolor: "info.main",
          width: 40,
          height: 40,
          borderRadius: "10%",
          outline: "1px solid gray", // 원하는 outline 스타일 지정
          outlineOffset: "1px",
        }}
        className="text-center"
      >
        {text}
      </Box>
    ),
    []
  )
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

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
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="구약" {...a11yProps(0)} />
            <Tab label="신약" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          {bibleInfos.slice(0, 40).map(
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
                    <div className="grid grid-cols-5">
                      {Array.from(
                        { length: info.maxChapter },
                        (_, i) => i + 1
                      ).map((el, index) => (
                        <Badge
                          sx={{
                            margin: 1,
                          }}
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
                      ))}
                    </div>
                  </AccordionDetails>
                </Accordion>
              )
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {bibleInfos.slice(39).map(
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
        </TabPanel>
      </Box>
    ),
    [value, searchParam.lang]
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
          {versions.map((el, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton>
                <ListItemText
                  onClick={toggleDrawerLang("bottom", false, el.val)}
                  primary={`${el.txt} (${el.description})`}
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
  const handleChangeViewMode = useCallback((e: any) => {
    const { checked } = e.target
    changeViewMode(checked ? "double" : "single")
  }, [])

  const handleChangeSecondLang = useCallback((e: any) => {
    const { value } = e.target
    changeSecondLang(value)
  }, [])

  const fontSize = useCallback(
    (anchor: string) => (
      <Box
        sx={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onKeyDown={toggleDrawerFontSize(anchor, false)}
      >
        <div className="w-[90%] mt-10 flex justify-between whitespace-nowrap">
          <FormControlLabel
            control={
              <Switch
                checked={searchParam.viewMode === "double"}
                onChange={handleChangeViewMode}
                name="viewMode"
              />
            }
            label="이중언어모드"
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">언어</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchParam.secondLang}
              label="secondLang"
              onChange={handleChangeSecondLang}
            >
              {versions.map((version) => (
                <MenuItem value={version.val}>{version.txt}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="w-[90%]">
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
        </div>
      </Box>
    ),
    [searchParam.fontSize, searchParam.viewMode, searchParam.secondLang]
  )

  const displayLang = useMemo(
    () => versions.find((val) => val?.val === searchParam.lang)?.txt || "",
    [searchParam.lang]
  )

  useEffect(() => {
    setCookie("bibleSearchParam", JSON.stringify(searchParam), {
      maxAge: 2592000, // 60 * 60 * 24 * 30 1month
    })
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
            {displayLang}
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <IconButton
            onClick={toggleDrawerFontSize("right", true)}
            aria-label="delete"
            size="medium"
          >
            <TextFieldsIcon fontSize="inherit" />
          </IconButton>
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

export default memo(BibleViewPageHeader)
