import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Button from '../../components/button/button';
import { FaPencilAlt, FaTrash } from "react-icons/fa";


const Movimentacao = () => {
    //estado que seleciona entre Entrada e Saida
    const [entrada, setEntrada] = useState(false);
    const [saida, setSaida] = useState(false);

    //Funçoes para alternar o estado da Entrada com a saida
    const changeEntrada = () =>{
        setEntrada(!entrada);
        setSaida(false);
    };
    
    const changeSaida = () =>{
        setSaida(!saida);
        setEntrada(false);
    }

    return (
        <>
            <Header />
            <div className=" flex gap-4 mx-10 mt-8">
                <div className=" bg-zinc-100 p-4 rounded-sm h-28 w-full">
                    <label className="block text-gray-700 text-md font-semibold my-2 mx-6">
                        Entradas:
                    </label>
                    <div className="text-green-700 text-xl font-bold text-center py-2">
                        R$: 8.563,23
                    </div>
                </div>
                <div className=" bg-zinc-100 p-4 rounded-sm h-28 w-full">
                    <label className="block text-gray-700 text-md font-semibold my-2 mx-6">
                        Saidas:
                    </label>
                    <div className="text-red-700 text-xl font-bold text-center py-2">
                        R$: 1.867,23
                    </div>
                </div>
                <div className=" bg-zinc-100 p-4 rounded-sm h-28 w-full">
                    <label className="block text-gray-700 text-md font-semibold my-2 mx-6">
                        Balanço:
                    </label>
                    <div className="text-gray-700 text-xl font-bold text-center py-2">
                        R$: *.***,46
                    </div>
                </div>
            </div>
            {/* Bloco para inserir movimentacao */}
            <div className=" mx-10 my-4 p-2 rounded-sm w-auto h-24 bg-zinc-100 gap-4 flex">
                <div className=" w-[10%] p-1">
                    <label className="block text-gray-700 text-sm font-light my-2 mx-1">
                        Data
                    </label>
                    <input 
                        type="date"
                        name="data"
                        placeholder=""
                        className=" w-full p-2 border border-solid border-[#D06610] rounded"
                    />
                </div>
                <div className=" w-[50%] p-1">
                    <label className="block text-gray-700 text-sm font-light my-2 mx-1">
                        Descricao
                    </label>
                    <input 
                        type="string"
                        name="descricao"
                        placeholder=""
                        className=" w-full p-2 border border-solid border-[#D06610] rounded"
                    />
                </div>
                <div className=" w-[10%] p-1">
                    <label className="block text-gray-700 text-sm font-light my-2 mx-1">
                        Valor
                    </label>
                    <input 
                        type="bouble"
                        name="valor"
                        placeholder="R$..."
                        className="w-full p-2 border border-solid border-[#D06610] rounded"
                    />
                </div>
                {/* checkbox Entrada-Saida */}
                <div className=" w-[20%] p-1 flex gap-8 py-5 justify-center">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={entrada}
                            onChange={changeEntrada}
                            className="form-checkbox h-4 w-4 accent-[#D06610]"
                        />
                        <span className="text-gray-700 text-sm font-bold">Entrada</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={saida}
                            onChange={changeSaida}
                            className="form-checkbox h-4 w-4 accent-[#D06610]"
                        />
                        <span className="text-gray-700 text-sm font-bold">Saida</span>
                    </label>
                </div>
                <div className=" w-[10%] p-1 flex gap-4 py-5">
                    <Button  text="Salvar" type="submit"/>
                </div>
            </div>
            {/* Bloco que armazena as movimentacoes add */}
            <div className=" mx-10 my-6 p-2 rounded-sm w-auto h-40 bg-zinc-100">
                <div className=" flex gap-2 w-full justify-between border-b-2 border-solid border-[#494949]">
                    <ul className="w-[10%] px-4 py-1 text-center">Data</ul>
                    <ul className="w-[50%] px-4 py-1">Descricao</ul>
                    <ul className="w-[15%] px-4 py-1 text-center">Valor</ul>
                    <ul className="w-[15%] px-4 py-1 text-center">Tipo</ul>
                    <div className="w-[10%] px-4 py-1 gap-4 flex justify-end">
                        <ul className="cursor-pointer"> <FaPencilAlt /> </ul>
                        <ul className="cursor-pointer"> <FaTrash /> </ul>
                    </div>
                </div>
                <div className="mt-2 gap-2 bg-[#494949] w-full flex justify-between border-b-2 border-solid border-zinc-100 text-white">
                    <ul className="w-[10%] px-2 py-1 text-center">11/10/2023</ul>
                    <ul className="w-[50%] px-4 py-1">Boleto Posto matriz</ul>
                    <ul className="w-[15%] px-4 py-1 text-center">R$: 1.895,23</ul>
                    <ul className="w-[15%] px-4 py-1 text-center">Entrada</ul>
                    <div className="w-[10%] px-4 py-1 gap-4 flex justify-end">
                        <ul className="cursor-pointer"> <FaPencilAlt /> </ul>
                        <ul className="cursor-pointer"> <FaTrash /> </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movimentacao