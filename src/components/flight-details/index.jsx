import Card from '@mui/material/Card'
import { useEffect, useState } from 'react'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link, useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import FlightLandIcon from '@mui/icons-material/FlightLand'
import Skeleton from '@mui/material/Skeleton'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { convertDateFormat, getStatusColor, apiURL } from '../../util/util'
import useFetchFromApi from '../../hooks/useFetchFromApi'

export default function Flight() {
  const { id } = useParams()
  const [flightDetails, setFlightDetails] = useState({})
  let flightNumber, airline, origin, destination, departureTime, status

  if (flightDetails) {
    ({ flightNumber, airline, origin, destination, departureTime, status } =
      flightDetails)
  }
  const { data, loading, error } = useFetchFromApi(
    apiURL,
    'flights',
    id
  )

  useEffect(() => {
    setFlightDetails(data)
  }, [data])

  return (
    <Grid className="flight-details">
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
      {loading ? (
        <Skeleton
          variant="rectangular"
          sx={{ maxWidth: 500, m: 4, height: 400 }}
        />
      ) : (
        <>
          <Button
            variant="outlined"
            size="large"
            sx={{
              m: 4,
            }}
          >
            <Link to="/">Go Back</Link>
          </Button>
          <Card sx={{ maxWidth: 500, m: 4 }}>
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
        </>
      )}
    </Grid>
  )
}
