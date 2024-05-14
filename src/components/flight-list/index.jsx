import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import FlightDetails from '../flight-card'
import FlightCardSkeleton from '../skeleton'

const FlightList = ({ searchValue }) => {
  const [flights, setFlights] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filteredFlights, setFliterFlights] = useState([])

  const fetchFlights = async (retryCount = 0) => {
    try {
      const response = await fetch(
        'https://flight-status-mock.core.travelopia.cloud/flights'
      )
      setLoading(true)
      if (!response.ok) {
        throw new Error('Something went wrong, please try again.')
      } else {
        const flightData = await response.json()
        setFlights(
          flightData.map((flight) => ({
            ...flight,
            searchText: `${flight.destination} ${flight.origin} ${flight.status} ${flight.airline} ${flight.flightNumber}`,
          }))
        )
        setFliterFlights(flightData)
      }
      setLoading(false)
    } catch (error) {
      if (retryCount < 3) {
        setTimeout(
          () => fetchFlights(retryCount + 1),
          Math.pow(2, retryCount) * 1000
        )
      } else {
        setError(error.message)
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    fetchFlights()
  }, [])

  useEffect(() => {
    setFliterFlights(
      flights.filter((flight) =>
        flight.searchText.toLowerCase().includes(searchValue.toLowerCase())
      )
    )
  }, [searchValue])

  if (loading) {
    return (
      <>
        {[...Array(4)].map((__, id) => (
          <FlightCardSkeleton key={id} />
        ))}
      </>
    )
  }
  return (
    <Grid container spacing={2} className="flight-list">
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
      {filteredFlights && filteredFlights.length > 0 ? (
        filteredFlights.map((flight) => (
          <Grid xs={12} item key={flight.id}>
            <FlightDetails details={flight} />
          </Grid>
        ))
      ) : (
        <Alert severity="warning">
          No data found, please refresh or search again!
        </Alert>
      )}
    </Grid>
  )
}

export default FlightList
