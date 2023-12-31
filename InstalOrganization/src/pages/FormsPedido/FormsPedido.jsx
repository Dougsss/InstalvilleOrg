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
        status:"",
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
    // Função para adicionar os itens 
    const [product, setProduct] = useState ([]);
    const [productName, setProductName] = useState ('');
    
    const addProduct = () => {
        if (productName.trim() !== '') {
            setProducts([...products, productName]);
            setProductName('');
        }
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
                        <div className="mb-4  w-[30%]">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Status:
                            </label>
                            <input
                                type="string"
                                name="status"
                                placeholder="Aprovado/Analise/Cancelado"
                                value={formData.status}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-solid border-[#D06610] rounded"
                            />
                        </div>
                        <button className="bg-[#D06610] hover:bg-orange-400 text-white hover:text-black p-2 rounded mx-1" onClick={addProduct}> + </button>
                        {/* produtos */}
                        <div className="mb-4 w-[50%]">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Produto:
                            </label>
                            <input
                                type="text"
                                name="productName"
                                placeholder="Qual sera o produto?"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
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
                        <div>
                            <h2 className="text-lg font-bold mb-2">Produtos Adicionados:</h2>
                            {/* <ul>
                                {products.map((product, index) => (
                                <li key={index} className="mb-2">{product}</li>
                                ))}
                            </ul> */}
                        </div>
                        <div className="flex flex-row-reverse">
                            <button className="bg-red-700 hover:bg-red-900 text-white p-2 rounded mx-1" onClick={closeModal}>Cancelar</button>
                            <button className="bg-green-700 hover:bg-green-900 text-white p-2 rounded mx-1" type="submit">Adidcionar</button>
                        </div>
                        </form>
            </div>            
        </>
    );
};

export default FormsPedido;