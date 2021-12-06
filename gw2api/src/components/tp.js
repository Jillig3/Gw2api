import React, { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";
import Linechart from "./chart";

const Tp = () => {
    const [info, setInfo] = useState();

    useEffect(() => {
        axios
            .get(
                `${BASE_URL}/commerce/transactions/history/sells`,
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

    if (info) {
        const makeKey = (date) => date.getTime()
        const chart = {};

        info.forEach(({ purchased, price }) => {
            const date = new Date(purchased);
            date.setHours(0, 0, 0, 0)
            const purchasedTimeString = makeKey(date)
            const purchasedTime = date;

            chart[purchasedTimeString] = {
                purchasedTime,
                price: (chart[purchasedTimeString]?.price || 0) + price
            }
        });

        const chartData = Object.keys(chart).reverse().map((key) => {
            const { purchasedTime, price } = chart[key]
            return [
                purchasedTime,
                price
            ]
        })

        return (
            <div className='chart-container'>
                <Linechart data={chartData} />
            </div>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export default Tp;