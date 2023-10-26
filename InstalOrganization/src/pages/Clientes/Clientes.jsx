import React, { useState } from 'react'
import Header from '../../components/header/Header';

import FormsCadastro from '../FormsCadastro/FormsCadastro';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

const Clientes = () => {
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
            <div className=" m-4 mt-6 p-2 rounded-sm w-auto h-12 bg-zinc-100 flex justify-between">
                <Input 
                    placeholder="Procure um Cliente..."
                />
                <Button text="Adicione Novo" onClick={openModal} />
                {/* Vai renderizar o modal apenas quando modalOpen for true */}
                {modalOpen && <FormsCadastro isOpen={modalOpen} closeModal={closeModal} />}
            </div>
            <div className="flex m-4 gap-2">
                <div className=" w-[60%] h-2/3 rounded-sm bg-zinc-100">
                    {/* Tenho que fazer essa planilha ser alimentada pelo BD */}
                    <table className="w-full">
                        <thead>
                            <tr className="border-solid border-b-2 border-[#333333]">
                                <th className="pt-2 ">Id</th>
                                <th>Nome</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-solid border-b border-[#333333]">
                                <td className="p-2">#100</td>
                                <td className="p-2 border-solid border-x border-[#333333]">Pendant Publishing</td>
                                <td className="p-2">publipendat12@gmail.com</td>
                            </tr>
                            <tr className="border-solid border-b border-[#333333] bg-[#333333] text-white">
                                <td className="p-2 border-solid border-x border-white">#101</td>
                                <td className="p-2 border-solid border-x border-white">Kruger Industrial Smoothing</td>
                                <td className="p-2 border-solid border-x border-white">krugersmoothing.1@hotmail.com</td>
                            </tr>
                            <tr className="border-solid border-b border-[#333333]">
                                <td className="p-2">#102</td>
                                <td className="p-2 border-solid border-x border-[#333333]">J. Peterman</td>
                                <td className="p-2">comercialj.peter@jpcorporation.com</td>
                            </tr>
                            <tr className="border-solid border-b border-[#333333] bg-[#333333] text-white">
                                <td className="p-2 border-solid border-x border-white">#101</td>
                                <td className="p-2 border-solid border-x border-white">Kruger Industrial Smoothing</td>
                                <td className="p-2 border-solid border-x border-white">krugersmoothing.1@hotmail.com</td>
                            </tr>
                            <tr className="border-solid border-b border-[#333333]">
                                <td className="p-2">#102</td>
                                <td className="p-2 border-solid border-x border-[#333333]">J. Peterman</td>
                                <td className="p-2">comercialj.peter@jpcorporation.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className=" p-2 w-[40%] h-auto rounded-sm border border-solid border-[#D06610]">

                </div>
            </div>
        </>
    )
}

export default Clientes;