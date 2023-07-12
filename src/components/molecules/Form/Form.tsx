import React, { useState } from 'react'
import axios from 'axios';
import { Model } from '../../atoms/Model';
import { Button } from '../../atoms/Button';

const Form = ({getDataList}:any) => {
    const [model, setModel] = useState(false);
    const [form, setFormData] = useState({
        file_name: '',
        description: '',
        assigned_item: '',
        date_added: '',
        last_downloaded: '',
        last_downloaded_by: '',
        type_of_document: '',
    })

    const dataUrl = 'https://retoolapi.dev/bhAivj/data';

    const sendDataHandler = (event:any) => {
        event.preventDefault();
        axios.post(dataUrl, {
            file_name: form.file_name,
            description: form.description,
            assigned_item: form.assigned_item,
            date_added: form.date_added,
            last_downloaded: form.last_downloaded,
            last_downloaded_by: form.last_downloaded_by,
            type_of_document: form.type_of_document,
          }).then((response) => {
            console.log(response, 'response')
            getDataList();
            setModel(false);
          })
    }

    const openModelHandler = () => {
        setModel(true);
    }
    
    const handleCloseModel = () => {
        setModel(false);
    }

    const getValueHandler = (event:any) => {
        const { name, value } = event.target;                
        setFormData((currentState) => ({
            ...currentState,
            [name]: value,
          }));
    }

  return (
    <div className='w-full flex justify-end px-4'>
        <Button type='button' onClick={openModelHandler}>Add Query</Button>

        <Model handleCloseModel={handleCloseModel} model={model}>            
            <form className="space-y-6" onSubmit={sendDataHandler}>
                <div className='p-4 m-0'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        File Name</label>
                    <div className="mt-2">
                        <input 
                            id="file_name" 
                            onChange={getValueHandler} 
                            name="file_name" 
                            type="text" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" 
                            />
                    </div>
                </div>

                <div className='p-4 m-0'>
                    <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Description</label>                        
                    </div>
            
                    <div className="mt-2">
                        <input 
                            id="description" 
                            onChange={getValueHandler} 
                            name="description" 
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
                    </div>
                </div>

                <div className='p-4 m-0'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Assigned Item
                    </label>
                    <div className="mt-2">
                        <input 
                            id="assigned_item" 
                            onChange={getValueHandler} 
                            name="assigned_item" 
                            type="text" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
                    </div>
                </div>

                <div className='p-4 m-0'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Date added
                    </label>
                    <div className="mt-2">
                        <input id="date_added"
                            name="date_added" 
                            onChange={getValueHandler} 
                            type="text" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" 
                            />
                    </div>
                </div>

                <div className='p-4 m-0'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Last downloaded
                    </label>
                    <div className="mt-2">
                        <input id="last_downloaded"
                            name="last_downloaded" 
                            onChange={getValueHandler} 
                            type="text" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" 
                            />
                    </div>
                </div>

                <div className='p-4 m-0'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Last Downloaded by
                    </label>
                    <div className="mt-2">
                        <input id="last_downloaded_by"
                            name="last_downloaded_by" 
                            onChange={getValueHandler} 
                            type="text" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" 
                            />
                    </div>
                </div>

                <div className='p-4 m-0'>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Type of Document
                    </label>
                    <div className="mt-2">
                        <input id="type_of_document"
                            name="type_of_document" 
                            onChange={getValueHandler} 
                            type="text" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" 
                            />
                    </div>
                </div>

                <div className='p-4 m-0'>
                    <Button type="submit">Add Item</Button>
                </div>
            </form>
        </Model>
    </div>
  )
}

export default Form