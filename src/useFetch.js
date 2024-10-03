import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout( () => {
        fetch(url, {signal: abortCont.signal})
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
            if (err.name === 'AbortError') {
                console.log('Fetch aborted');
                // return;
            }else {
                setIsPending(false);
                setError(err.message);
            }
        })
    }, 1000)
        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;