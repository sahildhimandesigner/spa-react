import { useEffect, useState } from 'react'
import axios from 'axios';
import { Count } from '../Count';
import { TDColumn } from '../TDColumn';
import { Form } from '../../molecules/Form';
import { Search } from '../../molecules/Search';
import { Loader } from '../../atoms/Loader'

const Table = () => {
    const [data, setData] = useState([])    
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const [searchItem, setSearchItem ] = useState('');
    const [loader, setLoader] = useState(false);
    const dataUrl = 'https://retoolapi.dev/bhAivj/data';

    console.log(dataUrl, 'dataUrl')
    useEffect(() => {
        getDataList();
    }, [])
    
    useEffect(() => {
        if(searchItem){
            fetchData()
        }
        else if (searchItem === '') {
            getDataList();
        }
    }, [searchItem])

    const getDataList = () => {
        setLoader(true)
        axios.get(`https://retoolapi.dev/bhAivj/data`)
        .then(function (response) {
            setLoader(false) 
            setData(response.data)                      
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    const clearHandler = () => {
        getDataList();
        setSearchItem('');
    }

    const handleCheckboxChange = (itemId:any) => {
        if (checkedItems.includes(itemId)) {
          setCheckedItems(checkedItems.filter((item) => item !== itemId));
        } else {
          setCheckedItems([...checkedItems, itemId]);
        }
      };

    const clearItemHandler = () => {
        setCheckedItems([]);
    }

    const deleteHandler = () => {
        removeData();        
    };

    const removeData = () => {
        const deleteRequests = checkedItems.map((item) => {
            return axios.delete(`https://retoolapi.dev/bhAivj/data/${item}`);
    });        
        Promise.all(deleteRequests).then(() => {
            getDataList();
        })
    }

    let totalCount = checkedItems.length;

    const onHandleSearch = (event: any) => {
        const { value } = event.target;
        setSearchItem(value);        
    };
    

    const fetchData = () => {
        setLoader(true)
         axios
            .get(`https://retoolapi.dev/bhAivj/data?file_name=${searchItem}`)
            .then((response) => {
                setData(response.data);
                setLoader(false)
            })
            .catch((error) => {
                console.error(error);
            });
      };

  return (
    <>
        <Loader loader={loader} />
        <Search 
            clearHandler={clearHandler} 
            searchItem={searchItem} 
            onHandleSearch={onHandleSearch} 
            />
        <Form getDataList={getDataList} />
        <br />
        <table width="1000" className='min-w-full divide-y divide-gray-300'>
        <thead>
            <tr>
                <th className='py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0'></th>
                <th className='py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0'>File name</th>
                <th className='py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0'>Description</th>
                <th className='py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0'>Assigned item</th>
                <th className='py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0'>Date added</th>
                <th className='py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0'>Last Downloaded</th>
                <th className='py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0'>Last Downloaded by</th>
                <th className='py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0'>Type of document</th>
            </tr>
        </thead>

        <tbody>
            {data.map((item) => (                                
                 <TDColumn 
                    checkedItems={checkedItems} 
                    item={item} 
                    handleCheckboxChange={handleCheckboxChange} />
            ))}
            <tr>
                <td colSpan={8}>
                    <br />
                </td>
            </tr>
            <tr>
                <td colSpan={8} align='center'>
                    <Count 
                        totalCount={totalCount} 
                        clearItemHandler={clearItemHandler} 
                        deleteHandler={deleteHandler}
                    />                
                </td>
            </tr>
        </tbody>
    </table>
  </>
  )
}

export default Table;