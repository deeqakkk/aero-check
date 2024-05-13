import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Flight() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 299 }}
        image="https://cdn.pixabay.com/photo/2024/02/21/08/44/woman-8587090_1280.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Airline name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Flight details
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button size="small">Scheduled Time</Button>
        <Button size="small">Status</Button>
      </CardActions>
    </Card>
  )
}
