import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { addCategory } from "../stores/actions/creator"
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
export function CategoryForm() {
    const MySwal = withReactContent(Swal)
    const [formCategory, setFormCategory] = useState({
        name: ''
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoadingCategoryAdd } = useSelector((state) => state.categories)
    const henddleForm = (e) => {
        const newForm = {
            ...formCategory,
            [e.target.name]: e.target.value
        }
        setFormCategory(newForm)
    }

    const henddleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(addCategory(formCategory))
            MySwal.fire({
                icon: 'success',
                title: 'Successful Product Created',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/categories')

        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: error,
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    if (isLoadingCategoryAdd === true) {
        return (
            <div className='w-full  flex justify-center '>
                <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt='' />
            </div>
        )
    }

    return <>
        <div className='ml-[350px] mr-[95px] mt-[75px] mb-[100px]'>
            <h1 className='text-5xl font-light mb-[30px]'>Create Category</h1>
            <form onSubmit={henddleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input value={formCategory.name} onChange={henddleForm} type="name" name="name" id="name" placeholder="Name Your Product" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required="" />
                </div>

                <div className='flex w-[400px] float-right'>
                    <button type="submit" className="w-full mr-[10px] text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Add</button>
                    <Link to='/categories' className="w-full border border-black text-black bg-white-600 hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                        <button type="submit" >Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    </>
}