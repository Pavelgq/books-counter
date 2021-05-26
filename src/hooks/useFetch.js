import { useEffect, useState, useCallback } from "react"


const useFetch = (url) => {
    const [response, setResponce] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})

    const doFetch = useCallback((fetchOptions = {}) => {
        setOptions(fetchOptions)
        setIsLoading(true)
    }, [])


    useEffect(() => {
        let skipGetResponseAfterDestroy = false
        if (!isLoading) {
            return false
        }
        fetch(url, options)
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((res) => {
                if (!skipGetResponseAfterDestroy) {
                    console.log(res)
                    setResponce(res)
                    setIsLoading(false)
                    
                }
            })
            .catch((error) => {
                if (!skipGetResponseAfterDestroy) {
                    setError(error)
                    setIsLoading(false)
                }
            })
            return () => {
                skipGetResponseAfterDestroy = true
            }
    }, [isLoading, url, options])

    return [{response, isLoading, error}, doFetch]
}

export default useFetch