import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { convertDateFormat, getStatusColor } from '../../util/util'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import FlightLandIcon from '@mui/icons-material/FlightLand'
import { Link } from 'react-router-dom'

export default function FlightCard({ details }) {
  const {
    id,
    flightNumber,
    airline,
    origin,
    destination,
    departureTime,
    status,
  } = details
  return (
    <Link to={`/flights/${id}`}>
      <Card variant="elevation" sx={{ m: 2, maxWidth: 700 }}>
        <CardActionArea>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ p: 2, pb: 1 }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {airline}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {flightNumber}
            </Typography>
          </Stack>

          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Divider
              textAlign="center"
              sx={{
                width: '50%',
              }}
            >
              <FlightTakeoffIcon /> {origin}
            </Divider>
            <Divider
              textAlign="center"
              sx={{
                width: '50%',
              }}
            >
              {destination} <FlightLandIcon />
            </Divider>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ p: 2 }}
          >
            <Typography gutterBottom variant="body2" component="div">
              {convertDateFormat(departureTime)}
            </Typography>
            <Chip label={status} color={getStatusColor(status)} />
          </Stack>
        </CardActionArea>
      </Card>
    </Link>
  )
}
