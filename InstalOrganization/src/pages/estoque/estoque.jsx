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
    </>
  )
}

export default estoque