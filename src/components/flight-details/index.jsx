import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useLocation, Navigate } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import FlightLandIcon from '@mui/icons-material/FlightLand'
import { convertDateFormat, getStatusColor } from '../../util/util'

export default function Flight() {
  const location = useLocation()

  if (!location.state) {
    ;<Navigate replace to="/404" />
  }

  const { flightNumber, airline, origin, destination, departureTime, status } =
    location.state.details

  return (
    <Grid className="flight-details">
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{
            width: 400,
            height: 350,
          }}
          image="https://cdn.pixabay.com/photo/2024/02/21/08/44/woman-8587090_1280.png"
          title="aeroplane"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {airline}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {flightNumber}
          </Typography>
          <Alert
            icon={<FlightTakeoffIcon fontSize="inherit" />}
            severity="success"
            sx={{
              borderRadius: 0,
            }}
          >
            {origin}
          </Alert>
          <Alert
            sx={{
              borderRadius: 0,
            }}
            icon={<FlightLandIcon fontSize="inherit" />}
            severity="info"
          >
            {destination}
          </Alert>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button size="small" variant="outlined">
            {convertDateFormat(departureTime)}
          </Button>
          <Button size="small" color={getStatusColor(status)}>
            {status}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
