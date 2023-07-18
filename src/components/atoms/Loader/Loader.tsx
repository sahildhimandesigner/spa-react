import React from 'react'
import LoaderImg from '../../../../src/img/loader.gif'
import { LoaderProps } from './type'

const Loader = ({ loader }:LoaderProps) => {
  return (
    <div>
    {loader === true ? <div className='fixed top-0 left-0 flex w-full h-full items-center justify-center'>
        <div className='opacity-80 fixed bg-white z-20 w-full h-full'></div>
        <div className='relative z-20'>
            <img src={LoaderImg} alt={LoaderImg} />
        </div>
    </div>: ''}
    </div>
    
  )
}

export default Loader