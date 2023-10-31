import React, { useState } from 'react';
import Header from '../../components/header/Header';

import Button from '../../components/button/button';
import Input from '../../components/Input/Input';
import FormsProduto from '../FormsProduto/FormsProduto';


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
        <div className=" mx-4 my-6 p-2 rounded-sm w-auto h-12 bg-zinc-100 flex justify-between">
            <Input 
                placeholder="Procure um Produto..."
            />
            <Button text="Novo Produto" onClick={openModal} />
            {/* Vai renderizar o modal apenas quando modalOpen for true */}
            {modalOpen && <FormsProduto isOpen={modalOpen} closeModal={closeModal} />}
        </div>
        <div className=" w-auto h-full m-4 rounded-sm bg-zinc-100">
            {/* Tenho que fazer essa planilha ser alimentada pelo BD */}
            <table className="w-full">
                <thead>
                    <tr className="border-solid border-b-2 border-[#333333]">
                        <th className="pt-2 ">Cod.</th>
                        <th>Descrição</th>
                        <th>NCM</th>
                        <th>Fornecedor</th>
                        <th>Quant.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-solid border-b border-[#494949] cursor-pointer">
                        <td className="p-2 text-center">#100</td>
                        <td className="p-2 border-solid border-x border-[#333333]">LAMP. LED ESPIRAL 15W - VERDE</td>
                        <td className="p-2 text-center">61791919</td>
                        <td className="p-2 text-center">G-LIGHT</td>
                        <td className="p-2 text-center">2</td>
                    </tr>
                    <tr className="border-solid border-b border-[#494949] bg-[#333333] text-white cursor-pointer">
                        <td className="p-2 text-center border-solid border-x border-white">#101</td>
                        <td className="p-2 border-solid border-x border-white">SENSOR PRESENÇA TETO 360, CONTROL COM DIP</td>
                        <td className="p-2 text-center border-solid border-x border-white">85365090</td>
                        <td className="p-2 text-center border-solid border-x border-white">EXATRON</td>
                        <td className="p-2 text-center border-solid border-x border-white">8</td>
                    </tr>
                </tbody>
            </table>
          </div>
    </>
  )
}

export default estoque