import React, { useState } from "react"
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings"
import FavoriteIcon from "@mui/icons-material/Favorite"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import { useNavigate } from "react-router-dom"

function footer() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction
            onClick={() => navigate("/bible-page")}
            label="Bible"
            icon={<AutoStoriesIcon />}
          />
          <BottomNavigationAction
            onClick={() => navigate("/my-page")}
            label="Favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            onClick={() => navigate("/setting-page")}
            label="Archive"
            icon={<SettingsIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  )
}
export default React.memo(footer)
