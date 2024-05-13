import React from 'react'
import { Skeleton, Card, CardActionArea, Stack } from '@mui/material'

const FlightCardSkeleton = () => {
  return (
    <Card
      variant="elevation"
      sx={{ m: 2, maxWidth: 700 }}
      className="flight-skeleton"
    >
      <CardActionArea>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 2, pb: 1 }}
        >
          <Skeleton variant="text" width={100} height={30} />
          <Skeleton variant="text" width={50} height={30} />
        </Stack>

        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Skeleton variant="text" width="100%" height={30} />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 2 }}
        >
          <Skeleton variant="text" width={100} height={20} />
          <Skeleton variant="text" width={100} height={20} />
        </Stack>
      </CardActionArea>
    </Card>
  )
}

export default FlightCardSkeleton
