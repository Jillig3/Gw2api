import React, { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";

const Tp = () => {
    const [ info, setInfo ] = useState();

    useEffect(() => {
        axios
            .get(
                `${BASE_URL}/commerce/tansactions/history/sells?access_token=${API_KEY}`
            )
            .then(res => res.json)
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    if(info){
        const sells = info.map(sell => <p>{sell.text}</p>)
        return (
            <div className='content-container'>   
             {sells}
            </div>
        )
    }else {
        return(
            <h1>Loading...</h1>
        )
    }
} 

export default Tp;