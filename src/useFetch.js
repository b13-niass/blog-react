import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout( () => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Mon HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false)
                setError(null);
            }).catch(err => {
            // console.error('Error fetching data', error);
            setIsPending(false);
            setError(err.message);
        })
    }, 1000)
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;