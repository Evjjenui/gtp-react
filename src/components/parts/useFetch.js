import {useState, useEffect} from "react";

const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [pending, setPending] = useState(true);
  const [errorInfo, setErrorInfo] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal})
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data!');
        }

        return res.json()
      })
      .then(data => {
        setdata(data);
        setPending(false);
        setErrorInfo('');
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          return;
        } else {
          setPending(false);
          setErrorInfo(err.message)
        }
      })
    
    return () => abortCont.abort();

  }, [url]);
  return {data, pending, errorInfo};
}
 
export default useFetch;
