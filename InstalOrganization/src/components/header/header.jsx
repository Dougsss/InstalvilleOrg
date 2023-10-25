import React from 'react';
import Logo from '../../assets/logoInstal.png';

const Header = () => {
    return (
        <div className="bg-zinc-300">
            <header className=" px-4 py-2 flex items-center justify-between h-14">
                <img src={Logo} placeholder="LogoInstal" className=" h-12 "></img>
                <div className="text-gray-900">
                    <ul className="flex text-center gap-4 ">
                        <li className=" hover:font-semibold">Estoque</li>
                        <li className=" hover:font-semibold">Movimentações</li>
                        <li className=" hover:font-semibold">Clientes</li>
                        <li className=" hover:font-semibold">Pedidos</li>
                        <li className=" hover:font-semibold">Sair</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;