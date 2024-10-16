import { memo, useMemo, useState } from "react"
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import SettingsIcon from "@mui/icons-material/Settings"
import FavoriteIcon from "@mui/icons-material/Favorite"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import { useLocation, useNavigate } from "react-router-dom"

function Footer() {
  // const [value, setValue] = useState("/bible-page")

  const location = useLocation()
  console.log(location)

  const menuArr = useMemo(
    () => [
      {
        location: "/bible-page",
        index: 0,
      },
      {
        location: "/my-page",
        index: 1,
      },
      {
        location: "/setting-page",
        index: 2,
      },
    ],
    []
  )

  const activeMenu = useMemo(
    () =>
      menuArr.find((val: any) => val.location === location.pathname)?.index ||
      0,
    [location, menuArr]
  )
  const navigate = useNavigate()

  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={activeMenu}
          // onChange={(event, newValue) => {
          //   setValue(newValue)
          // }}
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
export default memo(Footer)
