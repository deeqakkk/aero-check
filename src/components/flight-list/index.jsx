import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import FlightDetails from '../flight-card'
import FlightCardSkeleton from '../skeleton'
import useFetchFromApi from '../../hooks/useFetchFromApi'
import { apiURL } from '../../util/util'

const FlightList = ({ searchValue }) => {
  const [filteredFlights, setFliterFlights] = useState([])
  const [flightsData, setFlightsData] = useState([])
  const { data, loading, error } = useFetchFromApi(apiURL, 'flights')

  useEffect(() => {
    if (data && data.length > 0) {
      const updatedFlightsData = data.map((flight) => ({
        ...flight,
        searchText: `${flight.destination} ${flight.origin} ${flight.status} ${flight.airline} ${flight.flightNumber}`,
      }))
      setFlightsData(updatedFlightsData)
      setFliterFlights(updatedFlightsData)
    }
  }, [data])

  useEffect(() => {
    setFliterFlights(
      flightsData.filter((flight) =>
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
