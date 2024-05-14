import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import FlightDetails from '../flight-card'
import FlightCardSkeleton from '../skeleton'

const FlightList = () => {
  const [flights, setFlights] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchFlights = async () => {
    try {
      const response = await fetch(
        'https://flight-status-mock.core.travelopia.cloud/flights'
      )
      setLoading(true)
      if (!response.ok) {
        setError('Something went wrong, please try again.')
      } else {
        const flightData = await response.json()
        setFlights(
          flightData.map((flight) => ({
            ...flight,
            searchText: `${flight.destination} ${flight.origin} ${flight.status} ${flight.airline} ${flight.flightNumber}`,
          }))
        )
      }

      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFlights()
  }, [])

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
      {flights.map((flight) => (
        <Grid xs={12} item key={flight.id}>
          <FlightDetails details={flight} />
        </Grid>
      ))}
    </Grid>
  )
}

export default FlightList
