import { useEffect, useState } from 'react'

import NewsInterface from '../interfaces/NewsInterface'
import { API_URL } from '../utils/constants'

interface SingleNews {
  loading: boolean
  error: Error | null
  data: NewsInterface & { randoms?: NewsInterface[] } | undefined
}

const parseResponse = async (response: Response) => await response.json()

export default function useSingleNews(newsHash: string): SingleNews {
  const url = `${API_URL}/${newsHash}`
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState<NewsInterface>()


  useEffect(() => {
    fetchSingleNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsHash])

  const fetchSingleNews = async () => {
    try {
      setLoading(true)
      const responseData: NewsInterface = await parseResponse(await fetch(url))
      setData(responseData)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  return { data, loading, error }
}