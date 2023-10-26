import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '../../components/button/button';

const FormsCadastro = ({ isOpen, closeModal }) => {
  // Estado local para armazenar os dados do formulário
  const [formData, setFormData]= useState({
    name: "",
    email: ""
  });
  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Faça alguma coisa com os dados do formulário aqui
    console.log("Dados do formulário:", formData);
    // Feche o modal após enviar o formulário
    closeModal();
  };

  return (
    // Componente de Transição e Diálogo do Tailwind UI
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        {/* Overlay para fundo escuro quando o modal está aberto */}
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Dialog.Overlay}
            className="fixed inset-0 bg-black opacity-30"
          />
          {/* Conteúdo do modal */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Dialog.Content}
            className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nome:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="text-center">
                <Button text="Enviar" type="submit"/>
              </div>
            </form>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FormsCadastro