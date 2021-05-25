import { useEffect, useState } from "react"


const useFetch = (url, options) => {
    const [status, setStatus] = useState(
        {
            isLoading: false,
            data: undefined,
            error: undefined
        }
    )

    const doFetch = (url, options) => {
        setStatus( {
            isLoading: true
        })
        fetch(url, options)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setStatus({
                    isLoading: false,
                    data: res.data,
                })
            })
            .catch((error) => {
                setStatus({
                    isLoading: false,
                    error: error
                })
            })
    }

    useEffect(() => {
        if (url) {
            doFetch(url, options)
        }
    }, [])
    
    return {...status, doFetch}
}

export default useFetch