import React, { useState, useEffect } from 'react';

export default function App() {

  let [Pantalla, setPantalla] = useState(0);


  function btnpress(datos) {
    //si el valor de la pantalla es 0 si quita el cero y se coloca el nuevo valor
    if (Pantalla == 0) {
      setPantalla(datos);
      return;
    }
    Pantalla = Pantalla + "" + datos;

    setPantalla(Pantalla);

  }

  function BtnClear() {
    setPantalla(0);
  }

  const cal = (data) => {
    try {
      return (new Function('return (' + data + ')'))();
    }
    catch (err) {
      return '';
    }
    // return (new Function( 'return (' + data + ')' ))();
  }

  function Resultado_screen() {

    setPantalla(cal(Pantalla));

  }

  function Back_arrow() {

    const Valores = () => {
      if (Pantalla.toString().length > 0) {
        let VarTemp = Pantalla.toString();
        VarTemp = VarTemp.split("");
        VarTemp.pop();
        return VarTemp;
      }
    }

    setPantalla(Valores().toString().replace(/,/g, ""));
    //setPantalla(Valores.replace(/,/g, ""));



  }


  return (

    <div className="flex justify-center">
      <div className="flex items-center justify-center w-full min-h-screen  lg:w-1/2">
        <div className=" w-96  border border-gray-400 card gap-3 p-4 rounded-lg shadows-lg ">
          {/*-Pantalla*/}
          <div className="w-full p-2  overflow-hidden rounded-lg ">
            <nav className="p-2">
              <ul className="flex gap-2 flex-row">
                <li className="p-2 text-white"><input type="button" defaultValue="Estandar" /></li>
              </ul>
            </nav>
            <div className="w-full  h-16 text-white text-2xl items-center  flex justify-end rounded-lg bg-slate-700 p-6 " id="pantalla">
              {Pantalla}
            </div>
          </div>
          {/*-Opciones*/}
          <div>

          </div>
          {/*-Teclado Numerico*/}
          <div className="grid grid-cols-4  grid-rows-6 gap-1">
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress("%") }} defaultValue="%" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { BtnClear() }} defaultValue="CE" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " defaultValue="C" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { Back_arrow() }} defaultValue="<=" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress("1/x") }} defaultValue="1/x" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress("x2") }} defaultValue="x2" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress("2vx") }} defaultValue="2vx" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress("/") }} defaultValue="/" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress(7) }} defaultValue={7} />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress(8) }} defaultValue={8} />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress(9) }} defaultValue={9} />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress("*") }} defaultValue="*" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress("4") }} defaultValue={4} />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress(5) }} defaultValue={5} />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress(6) }} defaultValue={6} />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress("-") }} defaultValue="-" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress(1) }} defaultValue={1} />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress(2) }} defaultValue={2} />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress(3) }} defaultValue={3} />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress('+') }} defaultValue="+" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress("+/-") }} defaultValue="+/-" />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress(0) }} defaultValue={0} />
            <input type="button" className="  border btn btn-lg  p-2  text-center  h-20 " onClick={() => { btnpress(".") }} defaultValue="." />
            <input type="button" className="  border btn  btn-primary btn-lg  p-2  text-center text-white  h-20 " onClick={() => { Resultado_screen() }} defaultValue="=" />
          </div>
        </div>
      </div>
    </div>
  );
}