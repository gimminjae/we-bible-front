import { useEffect } from "react"
import useHeader from "../../hooks/useHeader"
import SettingsIcon from "@mui/icons-material/Settings"
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  useColorScheme,
} from "@mui/material"

function SettingViewPage() {
  const { setMenu } = useHeader()

  const { mode, setMode } = useColorScheme()

  useEffect(() => {
    setMenu(
      <div className="text-center">
        <SettingsIcon />
        환경설정
      </div>
    )
  }, [])

  return (
    <>
      <Box
        sx={{
          display: "flex",
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
        <FormControl>
          <FormLabel id="demo-theme-toggle">Theme</FormLabel>
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
              value="system"
              control={<Radio />}
              label="System"
            />
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  )
}
export default SettingViewPage
