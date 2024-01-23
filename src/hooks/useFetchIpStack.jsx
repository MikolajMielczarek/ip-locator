import { useState, useEffect } from "react";

export const useFetchIpStack = (url) => {
  const [data, setData] = useState({
    ip: undefined,
    type: undefined,
    continent_code: undefined,
    continent_name: undefined,
    country_code: undefined,
    country_name: undefined,
    region_code: undefined,
    region_name: undefined,
    city: undefined,
    zip: undefined,
    latitude: undefined,
    longitude: undefined,
    location: {
      geoname_id: undefined,
      capital: undefined,
      languages: [],
      country_flag: undefined,
      country_flag_emoji: undefined,
      country_flag_emoji_unicode: undefined,
      calling_code: undefined,
      is_eu: undefined,
    },
    error: { code: undefined , info: undefined},
    success: undefined,
  });

  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const newData = await res.json();

        setIsLoading(false);
        setData(newData);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsLoading(false);
          setError(err);
        }
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};
