import React, { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";
const Tp = () => {
    const [ info, setInfo ] = useState();

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/${BASE_URL}/commerce/transactions/history/sells`, 
                {
                    crossdomain: true,
                    headers: {
                        authorization: `Bearer ${API_KEY}`
                    }
                }
            )
            .then(res => {
                setInfo(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    if(info){
        const sells = info.map((sell) => 
        <li>Sell Price: {sell.price}, Creation Date: {sell.created}</li>);

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