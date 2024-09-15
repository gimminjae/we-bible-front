import React, { useState } from "react"
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArchiveIcon from "@mui/icons-material/Archive"

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
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  )
}
export default React.memo(footer)
