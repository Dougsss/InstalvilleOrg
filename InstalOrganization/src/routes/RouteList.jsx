import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home/home';
import Clientes from '../pages/Clientes/Clientes';
import Pedidos  from '../pages/Pedidos/Pedidos';
import Estoque  from '../pages/Estoque/Estoque';
import Movimentacao from '../pages/Movimentacao/Movimentacao';



function RouteList() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/estoque" element={<Estoque />} />
                <Route path="/movimentacao" element={<Movimentacao />} />
            </Routes>
        </>
    )
}

export default RouteList;