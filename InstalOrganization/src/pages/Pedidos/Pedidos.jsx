import React from 'react'
import Header from '../../components/header/Header';
import Button from '../../components/button/button';
import Input from '../../components/Input/Input';
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Pedidos = () => {
    return (
        <>
            <Header />
            <div className=" mx-4 my-6 p-2 rounded-sm w-auto h-12 bg-zinc-100 flex justify-between">
                <Input 
                    placeholder="Procure um Pedido..."
                />
                <Button text="Novo Pedido" />
            </div>
            <div className=" mx-4 my-6 p-2 rounded-sm w-auto h-[500px] bg-zinc-100">
                <h1 className="font-semibold text-center p-2 border-solid border-b-2 border-[#494949]">Historico de Pedidos</h1>
                <div className="mt-2 p-2 gap-2 bg-[#494949] w-full flex justify-between border-b-2 border-solid border-zinc-100 text-white">
                    <ul className="w-[10%] px-2 py-1 text-center">11/10/2023</ul>
                    <ul className="w-[50%] px-4 py-1">Posto matriz</ul>
                    <ul className="w-[30%] px-4 py-1 text-center">R$: 1.895,23</ul>
                    <ul className="w-[15%] px-4 py-1 text-center text-green-500">Aprovado</ul>
                    <div className="w-[10%] px-4 py-1 gap-4 flex justify-end">
                        <ul className="cursor-pointer"> <FaPencilAlt /> </ul>
                        <ul className="cursor-pointer"> <FaTrash /> </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pedidos;