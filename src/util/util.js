function convertDateFormat(dateString) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const date = new Date(dateString)
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const month = months[monthIndex]
  const year = date.getFullYear()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours %= 12
  hours = hours ? hours : 12
  minutes = minutes < 10 ? '0' + minutes : minutes

  const formattedDate = `${day}-${month}-${year} | ${hours}:${minutes}${ampm}`

  return formattedDate
}

function getStatusColor(status) {
  switch (status) {
    case 'On Time':
      return 'success'
    case 'Departed':
      return 'error'
    case 'Delayed':
      return 'warning'
    default:
      return 'info'
  }
}

const apiURL = 'https://flight-status-mock.core.travelopia.cloud'

export { getStatusColor, convertDateFormat, apiURL }
