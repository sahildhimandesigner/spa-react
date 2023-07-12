import React from 'react'
import { InputProps } from './types'

const Input = ({ type="text", value="", name="", id="", className, }:InputProps) => {
  return (
    <Input
        type={type} 
        value={value} 
        name={name} 
        id={id} 
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
    />
  )
}

export default Input;