import React, { useEffect, useState } from "react";
import axios from 'axios';

const FetchData = () =>  {
    console.log('rendering Fetch Data');
    const [data, updateData] = useState({})

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails =() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response=>{
            console.log(response);
            updateData(response.data)
        })
    };
    
    return <>
        <div>title: {data.title}</div>
        <div>userId: {data.userId}</div>
    </>
};

export default React.memo(FetchData);