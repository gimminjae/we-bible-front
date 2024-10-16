import { ReactNode } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

interface Props {
  topSubTitle?: ReactNode
  title?: ReactNode
  bottomSubTitle?: ReactNode
  content?: ReactNode
  btnNode?: ReactNode
  className?: string
}

export default function OutlinedCard({
  className = "",
  topSubTitle = "",
  title = "",
  bottomSubTitle = "",
  content = "",
  btnNode = "",
}: Props) {
  return (
    <div className={className}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {topSubTitle}
            </Typography>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              {bottomSubTitle}
            </Typography>
            <Typography variant="body2">{content}</Typography>
          </CardContent>
          <CardActions>{btnNode}</CardActions>
        </Card>
      </Box>
    </div>
  )
}
