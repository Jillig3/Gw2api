import React, { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";
import Tp from "./tp";
import Linechart from "./chart";

const Character = () => {
    const [ info, setInfo ] = useState();

    useEffect(() => {
        axios
            .get(`${BASE_URL}/account?access_token=${API_KEY}`)
            .then(res => {
                setInfo(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    if(info) {
        return (
            <div className='content-container'>   
                <h1></h1>
                <h3>Account Id: {info.id}</h3>
                <h3>Account Name: {info.name}</h3>
                <h3>Account Age: {info.age}</h3>
                <h3>Account Creation: {info.created}</h3>
                <h3>Fractal Level: {info.fractal_level}</h3>
                <Tp/>
                <Linechart/>
            </div>
        )
    } else {
        return(
        <h1>Loading...</h1>
        )
    }

};

export default Character;