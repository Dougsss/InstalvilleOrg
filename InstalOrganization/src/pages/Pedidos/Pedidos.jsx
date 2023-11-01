import React from 'react'
import Header from '../../components/header/Header';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { Fa500Px } from "react-icons/fa";

const Pedidos = () => {
    return (
        <>
            <Header />
            <div className=" w-20 h-10 bg-red-300">
                <FaBeer />
                <Fa500Px />
            </div>
        </>
    )
}

export default Pedidos;