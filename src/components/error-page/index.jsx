import { Button, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <Grid className="error-page">
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="body1">Sorry, an unexpected has occured!</Typography>
      <Typography variant="body1">
        {error.statusText || error.message}
      </Typography>
      <Button
        variant="outlined"
        size="large"
        sx={{
          m: 4,
        }}
      >
        <Link to='/'>Go Back</Link>
      </Button>
    </Grid>
  )
}

export default ErrorPage
