import React from 'react';
import { FaSearch } from "react-icons/fa";

const Input = ({ placeholder, onChange, value }) => {
    return (
        <div className=" flex bg-white py-2 px-4 rounded-lg border border-solid border-[#D06610]">
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <FaSearch className="cursor-pointer" />
        </div>
    )
}

export default Input;