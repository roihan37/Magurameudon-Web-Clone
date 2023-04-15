import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { destroyCategory, fecthCategory,  } from '../stores/actions/creator'
import { useSelector, useDispatch } from 'react-redux'
import { TableCategoryRow } from '../components/TableCategoryRow'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export function CategoryPage(){
    const MySwal = withReactContent(Swal)
    const {categories , isLoadingCategory } = useSelector((state) =>state.categories)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fecthCategory()) 
       
        
    }
    // eslint-disable-next-line
    ,[])
    // console.log(categories);
    if(isLoadingCategory === true){
        return (
            <div className='w-full  flex justify-center '>
       <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt=''/>
   </div>
        )
       }
    const henddleDelete = (id) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(destroyCategory(id))
                MySwal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
       
    }   
       
    return <>
          {/* CATEGORY LIST */}
            
          <div className='ml-[350px] mr-[95px] mt-[75px]'>
              <div className='flex justify-between'>
                  <h1 className='text-5xl font-light mb-[30px]'>Category List</h1>
                  <Link to="/add-category" type="submit" className="w-[175px] h-[45px] text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                      <div className='flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <p className='ml-[2px]'>
                          Create Category
                          </p> 
                      </div>
                  </Link>
                </div>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" className="px-6 py-3">
                                      NO
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      NAME
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      CREATED AT
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      UPDATED AT
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      ACTION 
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                            {
                                categories.map((el,i) => {
                                    return <>
                                    <TableCategoryRow el={el} key={i} i={i} henddleDelete={henddleDelete} />
                                    
                                    </>
                                })
                            }
                          </tbody>
                      </table>
                

              </div>
            </div>
    </>
}