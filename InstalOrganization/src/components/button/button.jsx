import React from 'react'
import { FaSearch } from "react-icons/fa";


const Button = ({ text, onClick }) => {
    return (
        <button
            className="bg-[#D06610] hover:bg-orange-400 text-white hover:text-gray-900 font-medium p-2 px-5 rounded"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;