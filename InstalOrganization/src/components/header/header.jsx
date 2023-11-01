import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logoInstal.png';

const Header = () => {
    return (
        <div className="bg-zinc-300">
            <header className=" px-4 py-2 flex items-center justify-between h-14">
                <Link to="/"><img src={Logo} placeholder="LogoInstal" className=" h-12 "></img></Link>
                <div className="text-gray-900">
                    <ul className="flex text-center gap-4 ">
                        <Link to="/estoque" className=" hover:font-semibold hover:text-[#D06610]">Estoque</Link>
                        <Link to="/movimentacao" className=" hover:font-semibold hover:text-[#D06610]">Movimentações</Link>
                        <Link to="/clientes" className=" hover:font-semibold hover:text-[#D06610]">Clientes</Link>
                        <Link to="/pedidos" className=" hover:font-semibold hover:text-[#D06610]">Pedidos</Link>
                        <Link to="/" className=" hover:font-semibold hover:text-[#D06610]">Sair</Link>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;