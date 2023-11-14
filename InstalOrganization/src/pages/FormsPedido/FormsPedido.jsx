import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../components/button/button";


const FormsPedido = ({ isOpen, closeModal}) => {
    //Estado local para armazenar os dados do formulario
    const [ formData, setFormData] = useState({
        name:"",
        email:"",
        telefone:"",
        data:"",
        produto:"",
        quantidade:"",
        valor:"",
        valorTotal:"",
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
                    {/* Formulário dentro do modal */}
                        <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Nome:
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome / Razão"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-solid border-[#D06610] rounded"
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
                                placeholder="exemplo123@exemplo.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-solid border-[#D06610] rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Telefone:
                            </label>
                            <input
                                type="string"
                                name="telefone"
                                placeholder="(00) 0 0000-0000"
                                value={formData.telefone}
                                onChange={handleInputChange}
                                className="w-[50%] p-2 border border-solid border-[#D06610] rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Descrição do Produto:
                            </label>
                            <input
                                type="text"
                                name="descricao"
                                placeholder="Qual sera o produto?"
                                value={formData.produto}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-solid border-[#D06610] rounded"
                                required
                            />
                        </div>
                        <div className="mb-4 w-[25%]">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Quantidade:
                            </label>
                            <input
                                type="number"
                                name="quantidade"
                                placeholder=""
                                value={formData.quantidade}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-solid border-[#D06610] rounded text-center"
                            />
                        </div>
                        <div className=" flex gap-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Valor:
                                </label>
                                <input
                                    type="double"
                                    name="valor"
                                    placeholder="Unidade/Metro"
                                    value={formData.valor}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-solid border-[#D06610] rounded"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Valor Total:
                                </label>
                                <input
                                    type="double"
                                    name="lucro"
                                    placeholder="Valor total dos Itens"
                                    value={formData.valorTotal}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-solid border-[#D06610] rounded"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <Button text="Enviar" type="submit" />
                        </div>
                        </form>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default FormsPedido;