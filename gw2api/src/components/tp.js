import React, { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";
import Linechart from "./chart";

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
            })
            .catch(err => console.log(err));
    }, []);

    if(info){

        let sells = [];

        info.forEach((sell) => {
            // let sellDate = new Date(sell.purchased); .something() here
            // ^ while making the variable, turn this date into something that can be compared like YYYY/MM/DD or whatever
            // ^ make sure it stays a Date object
            // check if `sellDate` exists in the sells array
            // IF IT DOES: add the sell.price to the current sell.price inside the array
            // IF IT DOES NOT: push a new date + sell.price entry to the array
            sells.push([
                new Date(sell.purchased),
                sell.price
            ]);
        });

        console.log(sells);

        return (
            <div className='chart-container'>
                <Linechart data={sells}/>
            </div>
        )
    }else {
        return(
            <h1>Loading...</h1>
        )
    }
} 

export default Tp;