import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '../../components/button/button';

const FormsCadastro = ({ isOpen, closeModal }) => {
  // Estado local para armazenar os dados do formulário
  const [formData, setFormData]= useState({
    name: "",
    email: "",
    telefone: "",
    cep: "",
    rua: "",
    numero: "",
    cidade: "",
    uf: "",
    cpf: "",
    cnpj: ""
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
  //estado que seleciona entre cpf e cnpj
  const [cpf, setCpf] = useState(false);
  const [cnpj, setCnpj] = useState(false);

  // Função para alternar o estado do cpf
  const changeCpf = () =>{
    setCpf(!cpf);
    setCnpj(false); //Desativa o checkbox do cnpj
  };

  // Função para alternar o estado do cnpj
  const changeCnpj = () => {
    setCnpj(!cnpj);
    setCpf(false); //Desativa o checkbox do cpf
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
                  Endereco:
                </label>
                <div className=" flex gap-2 mb-4">
                  <input
                    type="text"
                    name="rua"
                    placeholder="Rua"
                    value={formData.rua}
                    onChange={handleInputChange}
                    className="w-[85%] p-2 border border-solid border-[#D06610] rounded"
                    required
                  />
                  <input
                    type="string"
                    name="numero"
                    placeholder="N°"
                    value={formData.numero}
                    onChange={handleInputChange}
                    className="w-[15%] p-2 border border-solid border-[#D06610] rounded"
                    required
                  />
                </div>
                <div className=" flex gap-2 mb-4">
                  <input
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    className="w-[50%] p-2 border border-solid border-[#D06610] rounded"
                    required
                  />
                  <input
                    type="string"
                    name="uf"
                    placeholder="Estado"
                    value={formData.uf}
                    onChange={handleInputChange}
                    className="w-[50%] p-2 border border-solid border-[#D06610] rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  CEP:
                </label>
                <input
                  type="string"
                  name="cep"
                  placeholder="00000-000"
                  value={formData.cep}
                  onChange={handleInputChange}
                  className="w-[50%] p-2 border border-solid border-[#D06610] rounded"
                  required
                />
              </div>
              </div>
              <div className="mb-4 flex gap-4 items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={cpf}
                    onChange={changeCpf}
                    className="form-checkbox h-4 w-4 accent-[#D06610]"
                  />
                  <span className="text-gray-700 text-sm font-bold">Pessoa Fisica</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={cnpj}
                    onChange={changeCnpj}
                    className="h-4 w-4  accent-[#D06610]"
                  />
                  <span className="text-gray-700 text-sm font-bold">Pessoa Juridica</span>
                </label>
              </div>
              {cpf && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    CPF:
                  </label>
                  <input
                    type="string"
                    name="cpf"
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    className="w-[60%] p-2 border border-solid border-[#D06610] rounded"
                    required
                  />
                </div>
              )}
              <></>
              {cnpj &&(
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-1">
                    CNPJ:
                  </label>
                  <input
                    type="string"
                    name="cnpj"
                    placeholder="00.000.000/0000-00"
                    value={formData.cnpj}
                    onChange={handleInputChange}
                    className="w-[60%] p-2 border border-solid border-[#D06610] rounded"
                    required
                  />
                </div>
              )}
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