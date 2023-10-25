import React from 'react'
import Header from '../../components/header/Header'

const Clientes = () => {
    return (
        <>
            <Header />
            <div className=" m-4 mt-6 p-2 rounded-sm w-auto h-10 bg-zinc-100">

            </div>
            <div className="flex m-4 gap-2">
                <div className=" w-[60%] h-2/3 rounded-sm bg-zinc-100">
                    {/* Tenho que fazer essa planilha ser alimentada pelo BD */}
                    <table className="w-full">
                        <thead>
                            <tr className="border-solid border-b-2 border-[#333333]">
                                <th className="pt-2 ">Id</th>
                                <th>Nome</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-solid border-b border-[#333333]">
                                <td className="p-2">#100</td>
                                <td className="p-2 border-solid border-x border-[#333333]">Pendant Publishing</td>
                                <td className="p-2">publipendat12@gmail.com</td>
                            </tr>
                            <tr className="border-solid border-b border-[#333333]">
                                <td className="p-2">#101</td>
                                <td className="p-2 border-solid border-x border-[#333333]">Kruger Industrial Smoothing</td>
                                <td className="p-2">krugersmoothing.1@hotmail.com</td>
                            </tr>
                            <tr className="border-solid border-b border-[#333333]">
                                <td className="p-2">#102</td>
                                <td className="p-2 border-solid border-x border-[#333333]">J. Peterman</td>
                                <td className="p-2">comercialj.peter@jpcorporation.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className=" p-2 w-[40%] h-auto rounded-sm border border-solid border-[#D06610]">

                </div>
            </div>
        </>
    )
}

export default Clientes;