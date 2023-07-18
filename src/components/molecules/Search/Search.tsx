import { Button } from "../../atoms/Button"

const Search = ({searchItem, clearHandler, onHandleSearch}:any) => {
  return (
    <div className="flex w-[500px] flex-col items-start m-auto mt-7">        
        <input 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
            type='text' 
            placeholder="Enter Key Word" 
            name={searchItem} 
            onChange={onHandleSearch} 
        />
        <Button onClick={clearHandler} type="button">Clear</Button>
    </div>
  )
}

export default Search