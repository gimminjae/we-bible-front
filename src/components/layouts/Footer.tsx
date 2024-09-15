import React, { useState } from "react"
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings"
import FavoriteIcon from "@mui/icons-material/Favorite"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"

function footer() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0)
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
          <BottomNavigationAction label="Bible" icon={<AutoStoriesIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  )
}
export default React.memo(footer)
