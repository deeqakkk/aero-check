import { useState, useEffect } from 'react'

const useFetchFromApi = (apiUrl, endpoint, id) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async (retryCount = 3) => {
      try {
        const url = id ? `${apiUrl}/${endpoint}/${id}` : `${apiUrl}/${endpoint}`
        const response = await fetch(url)

        if (!response.ok) {
          if (retryCount > 0) {
            const delay = (4 - retryCount) ** 2
            return setTimeout(() => fetchData(retryCount - 1), delay * 1000)
          }
          throw new Error(response.statusText)
        }

        const data = await response.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint, id])

  return { data, loading, error }
}

export default useFetchFromApi
