import React from 'react'

const Model = ({model, handleCloseModel, children}:any) => {
    
  return (
    <>
        {model && <div className='fixed top-0 left-0 flex w-full h-full items-center justify-center'>
            <div className='opacity-80 fixed bg-black z-20 w-full h-full'></div>
            <div className='text-black bg-white w-[500px] z-20 rounded relative'>
                <div className='border-b p-4 mb-4 w-full'>
                    <button type='button' onClick={handleCloseModel}>close</button>
                </div>
                <div className='flex flex-col h-full overflow-auto max-h-[500px]'>
                    {children}
                </div>
            </div>
        </div>}
    </>
  )
}

export default Model