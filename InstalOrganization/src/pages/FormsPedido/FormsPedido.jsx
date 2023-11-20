import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../components/button/button";


const FormsPedido = ({ isOpen, closeModal}) => {
    //Estado local para armazenar os dados do formulario
    const [ formData, setFormData] = useState({
        name:"",
        email:"",
        telefone:"",
        date:"",
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
        <>
            <div className="mx-4 my-6 p-4 w-auto bg-zinc-100 shadow-xl rounded-sm">
                <h1 className="font-semibold text-center p-2 border-solid border-b-2 border-[#494949]">Novo Pedido</h1>
                        <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="mb-4 w-[20%]">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Data:
                            </label>
                            <input
                                type="date"
                                name="date"
                                placeholder="Data"
                                value={formData.date}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-solid border-[#D06610] rounded"
                                required
                            />
                        </div>
                        <div className="mb-4 w-[80%]">
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
                        <div className=" flex gap-5">
                            <div className="mb-4 w-full">
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
                            <div className="mb-4 w-full">
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
                        </div>
                        {/* produtos */}
                        <div className="mb-4 w-[50%]">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Produto:
                            </label>
                            <input
                                type="text"
                                name="produto"
                                placeholder="Qual sera o produto?"
                                value={formData.produto}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-solid border-[#D06610] rounded"
                                required
                            />
                        </div>
                        <div className=" flex gap-5">
                        <div className="mb-4">
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
                        </div>
                        <div className="flex flex-row-reverse">
                            <button className="bg-red-700 text-white p-2 rounded mx-1" onClick={closeModal}>Cancelar</button>
                            <button className="bg-green-700 text-white p-2 rounded mx-1" type="submit">Adidcionar</button>
                        </div>
                        </form>
            </div>            
        </>
    );
};

export default FormsPedido;