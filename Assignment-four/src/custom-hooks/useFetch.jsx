import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    let [data, setData]           = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError]         = useState(null);

    useEffect(() => {
        setTimeout(()=>{
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw new Error("Data fatching was not successful");
                }
                else{
                    return res.json()
                }
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
            }).catch(error =>{
                setIsLoading(false)
                setError(error.message)
            })
        },1000)
    },[url])

    return {data,isLoading,error}
}

export default useFetch