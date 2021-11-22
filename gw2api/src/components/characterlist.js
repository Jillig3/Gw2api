import React, { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";
// import User from './user';

const Character = () => {
    const [ info, setInfo ] = useState();

    useEffect(() => {
        axios
            .get(`${BASE_URL}?access_token=${API_KEY}`)
            .then(res => {
                setInfo(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    if(info) {
        return (
            <div className='content-container'>   
                <h1></h1>
                <h3>{info.id}</h3>
                <h3>{info.name}</h3>
                <h3>{info.age}</h3>
                <h3>{info.created}</h3>
                <h3>{info.fractal_level}</h3>
            </div>
        )
    } else {
        return(
        <h1>Loading...</h1>
        )
    }

};

export default Character;