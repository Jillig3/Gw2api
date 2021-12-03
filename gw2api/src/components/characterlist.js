import React, { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";
import Tp from "./tp";

const Character = () => {
    const [info, setInfo] = useState();

    useEffect(() => {
        axios
            .get(`${BASE_URL}/account?access_token=${API_KEY}`)
            .then(res => {
                setInfo(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    if (info) {
        const creation = new Date(info.created).toLocaleDateString()

        return (
            <div className='content-container'>
                <header className='content-header'>
                    <div className='header-title'>
                        <h1>Stupiddog's Account</h1>
                    </div>
                    <div className="header-info">
                        <div className='header-meta'>
                            <h3><span>Account Id:</span> {info.id}</h3>
                            <h3><span>Account Name:</span> {info.name}</h3>
                            <h3><span>Account Age:</span> {info.age}</h3>
                            <h3><span>Account Creation:</span> {creation}</h3>
                            <h3><span>Fractal Level:</span> {info.fractal_level}</h3>
                        </div>
                    </div>
                </header>
                <Tp />
            </div>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
};

export default Character;