import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { EmojiSearch } from "./Componentes/EmojiSearch";
import { NavBar } from "./Componentes/Navbar";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <a id="Arrow_up" href="#NavBar" className=" [ btn p-3 fixed  bottom-3 right-3  text-white rounded-full border hover:border-gray-300 border-gray-600 ]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
    </svg>
    </a>
    <NavBar></NavBar>
    <EmojiSearch></EmojiSearch>


  </>
);


