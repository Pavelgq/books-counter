import React, { useEffect, useState } from 'react'


const useFetch = (url, options) => {
    const [response, setResponce] = useState(null);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState()

    useEffect(() => {
        const fetchData = async () => {
             setIsLoading(true)
            try {
                const res = await fetch(url, options)
                const json = await res.json()
                setResponce(json)
                setIsLoading(false)
            } catch (error) {
                setError(error)
            }
        };
        fetchData();
    },[])
    return { response, error, isLoading };
}

export default useFetch