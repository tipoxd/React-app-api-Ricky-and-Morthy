import React, { useState, useEffect } from "react";
import { Card } from "./RickAndMorthy_items.jsx";

export function App() {
    const [Pj, setPj] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(json => setPj(json.results))
    }, [])

    let json_test = [];

    for (let i = 0; i < Pj.length; i++) {

        json_test.push(<Card Img={Pj[i].image} Name={Pj[i].name} Status={Pj[i].status} ></Card>
        )
    }

    return (<div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{json_test}</div>);
}
