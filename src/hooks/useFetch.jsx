import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({
    abbreviation: undefined,
    client_ip: undefined,
    datetime: undefined,
    day_of_week: undefined,
    day_of_year: undefined,
    dst: undefined,
    dst_from: undefined,
    dst_offset: undefined,
    dst_until: undefined,
    raw_offset: undefined,
    timezone: undefined,
    unixtime: undefined,
    utc_datetime: undefined,
    utc_offset: undefined,
    week_number: undefined,
    })
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setIsLoading(true)

      try{
        const res = await fetch(url, { signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        
        const data = await res.json()

        setIsLoading(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
            setIsLoading(false)
          setError('Could not fetch the data')
        }
      } 
    }

    fetchData()
    return () => {
      controller.abort()
    }

  }, [url])

  return { data, loading, error }
}