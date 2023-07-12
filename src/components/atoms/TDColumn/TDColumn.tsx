import React from "react";

const TDColumn = ({item, handleCheckboxChange, checkedItems}:any) => {  
  return (
    <tr key={item.id}>
        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>
            <input defaultChecked={checkedItems.includes(item.id)} 
            onChange={() => handleCheckboxChange(item.id)} 
            type="checkbox" value={item.id} />
        </td>
        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>{item.file_name}</td>
        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>{item.description}</td>
        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>{item.assigned_item}</td>
        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>{item.date_added}</td>
        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>{item.last_downloaded}</td>
        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>{item.last_downloaded_by}</td>
        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0'>{item.type_of_document}</td>            
    </tr>
  )
}

export default TDColumn;