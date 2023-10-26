import React from 'react'


const Button = ({ text, onClick }) => {
    return (
        <button
            className="bg-[#D06610] hover:bg-orange-400 text-white hover:text-gray-900 font-medium p-2 rounded"
            onClick={onClick}
        >
        {text}
        </button>
    )
}

export default Button;