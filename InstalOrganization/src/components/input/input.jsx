import React from 'react'

const Input = ({ placeholder, onChange, value }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border focus:border-solid focus:border-[#D06610] py-2 px-4 rounded-lg focus:outline-none  bg-white`}
        />
    )
}

export default Input;