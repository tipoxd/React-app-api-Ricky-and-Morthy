import React, { useState, useEffect } from "react";
import { Emoji_Card } from "./Emoji-card";
import data from "./JSON/emoji.json";



export function EmojiSearch() {
    const [Emoji_item, setEmoji_item] = useState([]);
    const [Search_item, setSearch_item] = useState([]);
    const [Category_arr, setCategory_arr] = useState([]);

    useEffect(() => {
        setEmoji_item(data);
        setSearch_item(data);
        Categorias();
    }, [])

    function filterEmoji() {
        let valor = document.querySelector("[id='Buscador_emoji']").value;
        let arry_filtrado = Search_item.filter(e => e.unicodeName.includes(`${valor}`));
        setEmoji_item(arry_filtrado);
    }
    let Json_i = [];


    function Categorias() {
        var valores = [];
        data.forEach(function (dato) {
            if (valores.indexOf(dato.subGroup) == -1) {
                valores.push(dato.subGroup);
            }
        });
        setCategory_arr(valores);
    }

    for (let i = 0; i < Emoji_item.length; i++) {
        Json_i.push(<Emoji_Card Emoji={Emoji_item[i].character} Nombre={Emoji_item[i].unicodeName} ></Emoji_Card >);

    }
    return (
        <div className="w-full p-3 flex flex-col gap-3 justify-center items-center">
            <div className="flex gap-3">
                <input type="text" id="Buscador_emoji" onKeyUp={() => { filterEmoji() }} placeholder="Buscar" className="input  input-bordered input-info w-full max-w-xs" />
                <div className="form-control w-full max-w-xs">
                    <select onChange={() => {

                        filter_Por_Categoria();
                        function filter_Por_Categoria() {
                            let valor = document.querySelector("[id='Select_Categorias']").value;
                            if (valor != "%") {
                                let arry_filtrado = Search_item.filter(e => e.subGroup.includes(`${valor}`));
                                setEmoji_item(arry_filtrado);
                                return;
                            }
                            setEmoji_item(Search_item);
                            return;
                        }

                    }} id="Select_Categorias" className="select select-bordered">
                        <option value="%">Todos</option>
                        {Category_arr.map(option => (
                            <option value={option}>{option}</option>
                        ))}
                    </select>

                </div>

            </div>

            <div className="[ grid-cols-1 ][ sm:grid-cols-2 ] [ md:grid-cols-4  ] [ lg:grid-cols-6 ] grid gap-5">{Json_i}</div>
        </div>

    );

}