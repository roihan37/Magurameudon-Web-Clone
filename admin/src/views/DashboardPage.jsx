import { useEffect, useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { TableProductRow } from '../components/TableProductRow'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom'
import { destroyProduct, fecthProduct, getIngredient,  } from '../stores/actions/creator'
import { useSelector, useDispatch } from 'react-redux'
export function DashboardPage() {
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const { products, isLoading, isLodingDestroyProduct } = useSelector((state) => state.products )
    const { ingredients } = useSelector((state) => state.ingredients )
    const MySwal = withReactContent(Swal)
    useEffect(() =>{
            dispatch(fecthProduct()) 
        
    }
    // eslint-disable-next-line
    ,[])
    
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
                dispatch(destroyProduct(id))
                MySwal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          
    }
// console.log(ingredients,'<<<<<<<');
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(id) {
    dispatch(getIngredient(id))
    console.log(id);
    setIsOpen(true)
  }



  if(isLoading === true){
   return <div className='w-full  flex justify-center '>
       <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt=''/>
   </div>
  }

  if(isLodingDestroyProduct === true){
    return <div className='w-full  flex justify-center '>
    <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt=''/>
</div>
   }

  return (
    
    <div>

         <div className='ml-[350px] mr-[95px] mt-[75px]'>
            <div className='flex justify-between'>
              <h1 className='text-5xl font-light mb-[30px]'>Product List</h1>
              <Link to="/add-product" type="submit" className="w-[175px] h-[45px] text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  <div className='flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p className='ml-[5px]'>
                      Create Product
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
                                  CATEGORY
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  PRICE
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  CREATED BY 
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  MAIN IMAGE 
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  INGREDIENT 
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  ACTION
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                        {
                            products.map((product, i) => {
                                return (
                                   
                                        <TableProductRow product={product} openModal={openModal} Link={Link} henddleDelete={henddleDelete} i={i} key={product.id} />
                             
                                )
                            })
                        }
                          
                      </tbody>
                  </table>
              </div>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Ingredients
                  </Dialog.Title>
                  <div className="mt-2 text-xs text-slate-400">
                    {   ingredients.length ?
                        ingredients.map((el) => {
                           
                                return <p>{el.name}</p>
                            
                        })
                        : <p>Empty ingredient</p>
                    }
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      OK!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

