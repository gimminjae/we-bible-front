import {
  memo,
  ReactNode,
  SyntheticEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
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
import { styled, useTheme } from "@mui/material/styles"
import { grey } from "@mui/material/colors"

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[900],
  }),
}))

interface TabPanelProps {
  children?: ReactNode
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
  const [bibleDrawer, setBibleDrawer] = useState(false)
  const [languageDrawer, setLanguageDrawer] = useState(false)
  const [fontDrawer, setFontDrawer] = useState(false)

  const toggleDrawerBible = useCallback(
    (open: boolean, bookCode?: string, chapter?: number) =>
      (event: KeyboardEvent | MouseEvent) => {
        if (bookCode && chapter) set(bookCode, chapter)
        if (
          event &&
          event.type === "keydown" &&
          ((event as KeyboardEvent).key === "Tab" ||
            (event as KeyboardEvent).key === "Shift")
        ) {
          return
        }
        setBibleDrawer(open)
      },
    [set]
  )
  const toggleDrawerFontSize = useCallback(
    (open: boolean, bookCode?: string, chapter?: number) =>
      (event: KeyboardEvent | MouseEvent) => {
        if (bookCode && chapter) set(bookCode, chapter)
        if (
          event &&
          event.type === "keydown" &&
          ((event as KeyboardEvent).key === "Tab" ||
            (event as KeyboardEvent).key === "Shift")
        ) {
          return
        }
        setFontDrawer(open)
      },
    [set]
  )
  const toggleDrawerLang = useCallback(
    (open: boolean, lang?: string) => (event: KeyboardEvent | MouseEvent) => {
      if (lang) changeLang(lang)
      if (
        event &&
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setLanguageDrawer(open)
    },
    [changeLang]
  )

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

  const handleChange = useCallback(
    (event: SyntheticEvent, newValue: number) => {
      setValue(newValue)
    },
    []
  )

  const bibleSelect = useMemo(
    () => (
      <Box
        sx={{ width: "auto" }}
        role="presentation"
        onKeyDown={toggleDrawerBible(false)}
      >
        <Puller />
        <List></List> {/**/}
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
          <div className="overflow-y-auto h-80">
            {bibleInfos.slice(0, 40).map(
              (info, index) =>
                index > 0 && (
                  <Accordion key={index}>
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
                        ).map((el, idx) => (
                          <Badge
                            key={idx}
                            sx={{
                              margin: 1,
                            }}
                            color="secondary"
                            onClick={toggleDrawerBible(
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
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="overflow-y-auto h-80">
            {bibleInfos.slice(39).map(
              (info, index) =>
                index > 0 && (
                  <Accordion key={index}>
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
                        ).map((el, idx) => (
                          <Badge
                            key={idx}
                            sx={{
                              margin: 1,
                            }}
                            color="secondary"
                            onClick={toggleDrawerBible(
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
          </div>
        </TabPanel>
      </Box>
    ),
    [value, searchParam.lang]
  )
  const languageSelect = useMemo(
    () => (
      <Box
        sx={{ width: "auto" }}
        role="presentation"
        onKeyDown={toggleDrawerLang(false)}
      >
        <Puller />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemText
                onClick={toggleDrawerLang(false)}
                className="text-center"
              >
                <CancelIcon />
              </ListItemText> */}
            </ListItemButton>
          </ListItem>
          {versions.map((el, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton>
                <ListItemText
                  onClick={toggleDrawerLang(false, el.val)}
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

  const fontSizeSelect = useMemo(
    () => (
      <Box
        sx={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1px",
        }}
        onKeyDown={toggleDrawerFontSize(false)}
      >
        <Puller />
        <div className="w-[90%] mt-10 flex justify-between whitespace-nowrap rounded-t-lg">
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
              {versions.map((version, index) => (
                <MenuItem key={index} value={version.val}>
                  {version.txt}
                </MenuItem>
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
          <Button onClick={toggleDrawerBible(true)}>
            {`${getBookName(searchParam.bookCode, searchParam.lang)} ${
              searchParam.chapter
            }`}
          </Button>
          <SwipeableDrawer
            id="bible"
            anchor="bottom"
            open={bibleDrawer}
            onClose={toggleDrawerBible(false)}
            onOpen={toggleDrawerBible(true)}
          >
            {bibleSelect}
          </SwipeableDrawer>
          <SwipeableDrawer
            id="lang"
            anchor="bottom"
            open={languageDrawer}
            onClose={toggleDrawerLang(false)}
            onOpen={toggleDrawerLang(true)}
          >
            {languageSelect}
          </SwipeableDrawer>
          <Button onClick={toggleDrawerLang(true)}>{displayLang}</Button>
        </ButtonGroup>
        <ButtonGroup>
          <IconButton
            onClick={toggleDrawerFontSize(true)}
            aria-label="delete"
            size="medium"
          >
            <TextFieldsIcon fontSize="inherit" />
          </IconButton>
        </ButtonGroup>
        <SwipeableDrawer
          id="lang"
          anchor="bottom"
          open={fontDrawer}
          onClose={toggleDrawerFontSize(false)}
          onOpen={toggleDrawerFontSize(true)}
        >
          {fontSizeSelect}
        </SwipeableDrawer>
      </div>
    </>
  )
}

export default memo(BibleViewPageHeader)
