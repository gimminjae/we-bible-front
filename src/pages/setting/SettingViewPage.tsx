import { useCallback, useEffect } from "react"
import useHeader from "../../hooks/useHeader"
import SettingsIcon from "@mui/icons-material/Settings"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  useColorScheme,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { setCookie } from "../../util/cookie"
import useToast from "../../hooks/useToast"

const fontList = [
  "GmarketSansMedium",
  "Dohyeon",
  "LeeSeoyun",
  "CookieRun-Regular",
  "ChosunGs",
  "BookkMyungjo-Bd",
  "Chosunilbo_myungjo",
  "Pretendard-Regular",
  "EF_jejudoldam",
]

function SettingViewPage() {
  const { setMenu } = useHeader()
  const { info } = useToast()
  const { mode, setMode } = useColorScheme()

  useEffect(() => {
    setMenu(
      <div className="text-center">
        <SettingsIcon />
        환경설정
      </div>
    )
  }, [])

  const handleClickFont = useCallback(
    (font: string) => (e: any) => {
      setCookie("font", font, { maxAge: 2592000 }) // 60 * 60 * 24 * 30 1month
      info("앱이 새로고침됩니다")
      setTimeout(() => window.location.reload(), 2000)
    },
    []
  )

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
          minHeight: "56px",
        }}
      >
        <FormControl className="w-full">
          <FormLabel id="theme">Theme</FormLabel>
          <div>
            <RadioGroup
              aria-labelledby="demo-theme-toggle"
              name="theme-toggle"
              row
              value={mode}
              onChange={(event) =>
                setMode(event.target.value as "system" | "light" | "dark")
              }
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            </RadioGroup>
          </div>
        </FormControl>
        <FormControl>
          <FormLabel id="font">Font</FormLabel>
          <div>
            {fontList.map(
              (font, index) =>
                index > 0 && (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      style={{ fontFamily: font }}
                    >
                      {font}
                    </AccordionSummary>
                    <AccordionDetails>
                      <p style={{ fontFamily: font }}>
                        태초에 하나님이 천지를 창조하시니라 창세기 1장 1절
                      </p>
                      <div className="flex justify-end">
                        <Button onClick={handleClickFont(font)}>
                          폰트 적용
                        </Button>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                )
            )}
          </div>
        </FormControl>
      </Box>
    </>
  )
}
export default SettingViewPage
