import {useEffect, useState} from "react";

const useFecth = (url = '', options = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let isMounted = true;

        setLoading(true);

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setData(data)
                    console.log(data)
                    setError(null)
                }
            })
            .catch(err => {
                if (isMounted) {
                    setData(null);
                    setError(error);
                }
            })
            .finally(() => isMounted && setLoading(false))

        return () => (isMounted = false)
    }, [url, options])

    return {loading, error, data}
}

export default useFecth;