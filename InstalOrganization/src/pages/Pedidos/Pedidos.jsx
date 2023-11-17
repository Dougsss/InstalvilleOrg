import React, { useState } from 'react';
import Header from '../../components/header/Header';
import PedidosPdf from '../../Pdf/PedidosPdf/PedidosPdf';
import Button from '../../components/button/button';
import Input from '../../components/Input/Input';
import { FaPencilAlt, FaTrash, FaFilePdf } from "react-icons/fa";
import FormsPedido from '../FormsPedido/FormsPedido';

const Pedidos = () => {
    /* Estados para Label flutuante sobre os Icones */
    const [isHoveredEdit, setIsHoveredEdit] = useState(false);
    const [isHoveredPdf, setIsHoveredPdf] = useState(false);
    const [isHoveredBin, setIsHoveredBin] = useState(false);

    const handleMouseEnter = () => {
        setIsHoveredEdit(true);
    };
    const handleMouseLeave =() => {
        setIsHoveredEdit(false);
    };
    const handleMouseEnter1 = () => {
        setIsHoveredPdf(true);
    };
    const handleMouseLeave1 =() => {
        setIsHoveredPdf(false);
    };
    const handleMouseEnter2 = () => {
        setIsHoveredBin(true);
    };
    const handleMouseLeave2 =() => {
        setIsHoveredBin(false);
    };
    //Estado para atualizar o modal
    const [modalOpen, setModalOpen] = useState(false);

    // Função para abrir o modal
    const openModal = () => {
        setModalOpen(true);
    };
     // Função para fechar o modal
    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <>
            <Header />
            <div className=" mx-4 my-6 p-2 rounded-sm w-auto h-12 bg-zinc-100 flex justify-between">
                <Input 
                    placeholder="Procure um Pedido..."
                />
                <Button text="Novo Pedido" onClick={openModal} />
            </div>
            {/* Vai renderizar o modal apenas quando modalOpen for true */}
            {modalOpen && <FormsPedido isOpen={modalOpen} closeModal={closeModal} />}
            <div className=" mx-4 my-6 p-2 rounded-sm w-auto h-auto bg-zinc-100">
                <h1 className="font-semibold text-center p-2 border-solid border-b-2 border-[#494949]">Historico de Pedidos</h1>
                <div className="mt-1 p-2 gap-2 bg-[#494949] w-full flex justify-between border-b-2 border-solid border-zinc-100 text-white">
                    <ul className="w-[10%] px-2 py-1 text-center">11/10/2023</ul>
                    <ul className="w-[50%] px-4 py-1">Posto matriz</ul>
                    <ul className="w-[25%] px-4 py-1 text-center">R$: 1.895,23</ul>
                    <ul className="w-[15%] px-4 py-1 text-center text-green-500">Aprovado</ul>
                    <div className="w-[15%] px-4 py-1 gap-4 flex justify-end"> {/* Balão de label (exibido apenas quando isHovered é true) */}
                        <ul className="cursor-pointer relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <FaPencilAlt />
                            {isHoveredEdit && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-500 text-white py-1 px-2 rounded-md text-sm">
                                    Editar
                                </div>
                            )}
                        </ul>
                        <ul className="cursor-pointer relative" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={PedidosPdf}> <FaFilePdf />
                            {isHoveredPdf && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-500 text-white py-1 px-2 rounded-md text-sm">
                                    PDF
                                </div>
                            )}
                        </ul>
                        <ul className="cursor-pointer relative" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}> <FaTrash />
                            {isHoveredBin && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-500 text-white py-1 px-2 rounded-md text-sm">
                                    Excluir
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pedidos;