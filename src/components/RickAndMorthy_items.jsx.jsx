
import React, { useState } from 'react';


export function Card({ Img = "", Name = "", Status = "" }) {
    const [Favorites, setFavorites] = useState(false);

    const Add_class = Favorites ? "btn-active" : "";

    let status_html = "";
    if (Status === "Alive") {
        status_html = <div className="badge bg-green-300 text-black">{status_html}</div>;
    } else if (Status === "Dead") {
        status_html = <div className="badge bg-red-300 text-black">{status_html}</div>;
    }


    return (
        <>

            <div className="card bg-base-100 shadow-xl">

                <figure><img src={Img} alt=" " /></figure>
                <div className="card-body ">
                    <div className="flex items-center gap-2">
                        <h2 className="card-title">
                            {Name}
                        </h2>
                        {status_html}
                    </div>


                    <div className="flex justify-center items-center">
                        <button
                            onClick={() => { setFavorites(!Favorites) }}
                            className={"btn " + Add_class + " btn-circle btn-outline"}
                        >
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>



        </>);

}