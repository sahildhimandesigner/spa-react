import React from 'react'

const Count = ({totalCount, clearItemHandler, deleteHandler}:any) => {
  return (
    <div>
        {totalCount ? ( 
        <div className="bg-sky-500/100 text-white justify-between rounded w-64 flex">
            <span className='bg-indigo-500 text-white py-4 px-5'>{`${totalCount}`}</span>
            <span className='mx-4 items-center justify-center flex'>File Selected</span> 
            <button type='button' className='mx-4' onClick={clearItemHandler}>x</button>
            <button type='button' className='mx-4' onClick={deleteHandler}>delete</button>
        </div>) : ''}
    </div>
  )
}

export default Count;