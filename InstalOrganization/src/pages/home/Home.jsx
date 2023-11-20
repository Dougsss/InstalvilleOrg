import React from 'react'

import Header from '../../components/header/Header';
import { FaBorderNone } from 'react-icons/fa';

function Home() {
    return (
        <>
            <Header />
            <section className=" w-full mt-5">
                <div className=" p-2 pl-4 text-white mb-4">
                    <h1 className=" font-medium text-2xl mb-1">Painel de Controle!</h1>
                    <p className=" font-extralight italic text-xs">Bem vindo de volta!</p>
                </div>
                <div className="bg-zinc-300 h-[2px] mx-4 mb-5 rounded-lg"></div>
            </section>
            <div className=" m-4">
                <div className=" mb-3 flex flex-row-reverse text-white">
                    <input type="date"></input>
                </div>
                <div className=" flex gap-3">
                    <div className=" bg-zinc-100 p-4 rounded-md h-28 w-full">
                        <label className="block text-[#D06610] text-md lg:text-xl font-semibold my-2 text-center">
                            Valor Total - Vendas:
                        </label>
                        <div className="text-gray-700 text-xl font-bold text-center py-2">
                            R$: *.***,46
                        </div>
                    </div>
                    <div className=" bg-zinc-100 p-4 rounded-md h-28 w-full">
                        <label className="block text-[#D06610] text-md lg:text-xl font-semibold my-2 text-center">
                            Custos - Vendas:
                        </label>
                        <div className="text-red-700 text-xl text-center py-2">
                            R$: 8.563,23
                        </div>
                    </div>
                    <div className=" bg-zinc-100 p-4 rounded-md h-28 w-full">
                        <label className="block text-[#D06610] text-md lg:text-xl font-semibold my-2 text-center">
                            Lucro - Vendas:
                        </label>
                        <div className="text-green-700 text-xl text-center py-2">
                            R$: 1.867,23
                        </div>
                    </div>
                    <div className=" bg-zinc-100 p-4 rounded-md h-28 w-full">
                        <label className="block text-[#D06610] text-md lg:text-xl font-semibold my-2 text-center">
                            Produtos Vendidos:
                        </label>
                        <div className="text-gray-700 text-xl text-center py-2">
                            153
                        </div>
                    </div>
                </div>    
                <div className="bg-zinc-100 rounded-md text-center mt-8">Estastisticas</div>
            </div>
        </>
    )
}

export default Home