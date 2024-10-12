import React from "react";
import { useState } from "react"; //manejo de estados

export default function ApiContenido() {

    const[output, setOutput] = useState('');//Almacenar la respuesta de la api
    const[expressApi, setExpressApi] = useState('http://localhost:8001/api/');//Almacenar api de express
    const[DjangoApi, setDjangoApi] = useState('http://localhost:8000/api/');//Almacenar api de django


    async function callApi(url){
        try {
            const response = await fetch(url);  //esperar la promesa de la api  GUARDAMOS LA URL DEL SERVIDOR

            const dato = await response.json(); //GUARDAR LA RESPUESTA E FORMATO JSON

            setOutput(JSON.stringify(dato,null,1)); //Colocar la respuesta

         } catch (error) {
            setOutput('Error' + error);
        }
    }


    return (
        <div className="bg-purple-400 min-h-screen flex items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">
                    Llamado de las APIs de Express y Django
                </h1>
                <div className="mb-4">
                    <label 
                        htmlFor="expressApi" 
                        className="block text-sm font-medium text-gray-700 mb-1">
                        URL de Express API
                    </label>
                    <input 
                        type="text"
                        id='expressApi_URL'
                        value={expressApi}
                        onChange={(e) => setExpressApi(e.target.value)} // Actualizar el valor del input
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500  text-gray-900" 
                        placeholder="Ingrese la URL de la API de Express"
                    />
                </div>
    
                <div className="mb-4">
                    <label 
                        htmlFor="DjangoApi" 
                        className="block text-sm font-medium text-gray-700 mb-1">
                        URL de Django API
                    </label>
                    <input 
                        type="text"
                        id='Django_URL'
                        value={DjangoApi}
                        onChange={(e) => setDjangoApi(e.target.value)} // Actualizar el valor del input
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                        placeholder="Ingrese la URL de la API de Django"
                    />
                </div>
    
                <div className="flex justify-between mt-6">
                    <button 
                        onClick={() => callApi(expressApi)}
                        className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                        Llamar a Express
                    </button>
    
                    <button 
                        onClick={() => callApi(DjangoApi)}
                        className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                        Llamar a Django
                    </button>
                </div>
    
                {/* Sección para mostrar la respuesta */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-700">RESPUESTA:</h3>
                    <pre id="output" className="border border-gray-300 rounded-md p-2 bg-gray-100 text-gray-900">
                        {output}
                    </pre>
                </div>
            </div>
        </div>
    );
    
    



}
