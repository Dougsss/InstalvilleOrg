import React, { useState } from 'react'
import Header from '../../components/header/Header';

import FormsCadastro from '../FormsCadastro/FormsCadastro';
import Button from '../../components/button/button';
import Input from '../../components/Input/Input';

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
                <div className=" w-[60%] h-full rounded-sm bg-zinc-100">
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
                            <tr className="border-solid border-b border-[#494949] cursor-pointer">
                                <td className="p-2">#100</td>
                                <td className="p-2 border-solid border-x border-[#333333]">Pendant Publishing</td>
                                <td className="p-2">publipendat12@gmail.com</td>
                            </tr>
                            <tr className="border-solid border-b border-[#494949] bg-[#333333] text-white cursor-pointer">
                                <td className="p-2 border-solid border-x border-white">#101</td>
                                <td className="p-2 border-solid border-x border-white">Kruger Industrial Smoothing</td>
                                <td className="p-2 border-solid border-x border-white">krugersmoothing.1@hotmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className=" w-[40%] h-full rounded-sm rounded-tl-lg border border-solid border-[#D06610] text-white">
                    <div className=" bg-[#D06610] font-medium mb-1 p-1 w-[15%] text-center rounded-br-lg rounded-tl-lg">ID</div>
                    <div className=" m-5 mx-8 "> 
                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold">Nome:</h1>
                            <p className=" font-extralight"> Joao da Silca</p>
                        </div>
                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold">CPF ou CNPJ:</h1>
                            <p className=" font-extralight"> 02151515555-515 </p>
                        </div>
                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold">Telefone:</h1>
                            <p className=" font-extralight"> (47) 9 9885-8514</p>
                        </div>
                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold">Email:</h1>
                            <p className=" font-extralight"> blastre.21@gmagro.com</p>
                        </div>
                        <h1 className="font-bold mt-5">Endereco</h1>
                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold">Rua:</h1>
                            <p className=" font-extralight"> Alguma rua , numero </p>
                        </div>
                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold">Cidade:</h1>
                            <p className=" font-extralight"> Chuville</p>
                        </div>
                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold">Estado:</h1>
                            <p className=" font-extralight"> NemTao Santa Catarina</p>
                        </div>
                        <div className="flex gap-3 my-2">
                            <h1 className="font-bold">CEP:</h1>
                            <p className=" font-extralight"> 000000-000 </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clientes;