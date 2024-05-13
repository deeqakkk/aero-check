import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports'

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="navbar-container">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <ConnectingAirportsIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            AeroCheck
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
