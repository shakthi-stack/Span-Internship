import { useState,useEffect } from "react";
const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [err,setErr] = useState(null);
    useEffect(()=>{
        const abortCtrl = new AbortController();

        // console.log("useEffect ran");
        setTimeout(()=>{
            fetch(url,{signal:abortCtrl.signal}).then(res => {
            if(!res.ok){
                throw new Error("Could not fetch data...");
            }
            return res.json();
            }).then((data)=>{
                // console.log(data);
                setData(data);
                setIsLoading(false);
                setErr(null);
            }).catch(err => {
                if(err.name === 'AbortError'){
                    return console.log("Fetch Aborted");
                }
                setErr(err.message);
                setIsLoading(false);
            });
        },1000);

        return ()=>{
            abortCtrl.abort();
        }
    },[url]);

    return {
        data,isLoading,err
    };
}

export default useFetch;