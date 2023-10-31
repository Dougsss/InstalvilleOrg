import React, { useState } from 'react';
import Header from '../../components/header/Header';

import Button from '../../components/button/button';
import Input from '../../components/Input/Input';


const estoque = () => {
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
                placeholder="Procure um Produto..."
            />
            <Button text="Novo Produto" onClick={openModal} />
            {/* Vai renderizar o modal apenas quando modalOpen for true */}
            {modalOpen && <FormsCadastro isOpen={modalOpen} closeModal={closeModal} />}
        </div>
        <div className=" w-[60%] h-full m-4 rounded-sm bg-zinc-100">
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
    </>
  )
}

export default estoque