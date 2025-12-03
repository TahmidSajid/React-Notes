import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const useFetch = (url) => {

    const [users,setUser]                 = useState([]);
    const [isLoading, setIsLoading]       = useState(true);
    const [error, setError]               = useState(null);


    let setId = (users) =>{
        var newUsers = users.map((user)=>{
        return {...user,id:uuidv4()}
        })
        setUser(newUsers);
    }

    useEffect(()=>{
        setTimeout(() => {
           fetch(url).
            then(res =>{
                if(!res.ok) {
                    throw Error("Could not load data. Please try again!");
                }
                return res.json();
            }).
            then(data => {
                setId(data);
                setIsLoading(false);
            }).
            catch(error => {
                setError(error.message);
                setIsLoading(false);
            }) 
        },3000);
   },[]);

    return {users, isLoading, error}
}


export default useFetch;