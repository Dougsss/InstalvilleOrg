import React from 'react'

import Header from '../../components/header/Header';

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
            <div className="grid grid-rows-6 grid-cols-3 grid-flow-row-dense gap-3 m-4 mt-8">
                <div className="row-span-3  bg-zinc-100 rounded-md h-28 text-center">Valor de saida</div>
                <div className="row-span-6 col-span-2 bg-zinc-100 rounded-md text-center">Estastisticas</div>
                <div className="row-span-3  bg-zinc-100 rounded-md text-center"> Valor de entrada</div>
            </div>
        </>
    )
}

export default Home