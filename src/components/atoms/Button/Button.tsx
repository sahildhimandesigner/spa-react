import React, { Children } from 'react'
import { ButtonProps } from './type'

const Button = ({label="button", children, type="button",  ...rest }:ButtonProps) => {
  return (
    <button type={type} {...rest} className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white 
    shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-4 mt-4'>
        {children}
    </button>
  )
}

export default Button