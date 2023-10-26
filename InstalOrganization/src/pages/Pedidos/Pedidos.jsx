import React from 'react'
import Header from '../../components/header/Header';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const Pedidos = () => {
    return (
        <>
            <Header />
            <div className=" w-20 h-10 bg-red-300">
                <FaBeer />
            </div>
        </>
    )
}

export default Pedidos;