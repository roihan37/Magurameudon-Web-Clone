import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from "../stores/actions/creator"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function RegisterPage(){
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.users)
    const [formRegister, setFormRegister] = useState({
        username : '',
        email : '',
        password : '',
        phoneNumber : '',
        address : ''
    })

    const henddleRegister = (e) => {
        const newForm = {
            ...formRegister,
            [e.target.name] : e.target.value
        }
        setFormRegister(newForm)
    }

    const heddleSubmit = async (e) => {
        e.preventDefault();
        try {
           await dispatch(registerUser(formRegister))
            MySwal.fire({
                icon: 'success',
                title: 'Successful Account Created',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: error,
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    if(isLoading === true){
        return (
            <div className='w-full  flex justify-center '>
           <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt=''/>
       </div>
        )
    }

    return <>
        {/* REGISTER USER */}
            
        <div className='ml-[350px] mr-[95px] mt-[75px] mb-[100px]'>
              <h1 className='text-5xl font-light mb-[30px]'>Register New Admin</h1>
              <h1 className='text-2xl font-light '>Personal Information</h1>
              <h1 className='text-1xl font-light mb-[20px]'>Use a permanent address where you can receive mail.</h1>
                  <form className="space-y-4 md:space-y-6" action="#" onSubmit={heddleSubmit}>
                                <div>
                                   
                                    <input value={formRegister.username} onChange={henddleRegister} type="username" name="username" id="username" placeholder="Username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"  required=""/>
                                </div>
                                <div>

                                    <input value={formRegister.email} onChange={henddleRegister} type="email" name="email" id="email" placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"  required=""/>
                                </div>
                                <div>
                                   
                                    <input value={formRegister.password} onChange={henddleRegister} placeholder="Password" type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required="" />
                                </div>
                                <div>
                                   
                                    <input value={formRegister.phoneNumber} onChange={henddleRegister} placeholder="Phone Number" type="phoneNumber" name="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"  required=""/>
                                </div>
                                <div>
                                   
                                    <textarea value={formRegister.address} onChange={henddleRegister} placeholder="Address" type="address" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"  required=""/>
                                </div>
                                <div className='flex w-[400px] float-right'>
                                  <button type="submit" className="w-full mr-[10px] text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Register</button>
                                  <Link to='/' className="w-full border border-black text-black bg-white-600 hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                                  <button type="submit" >Cancel</button>
                                  </Link>
                                </div>
                            </form>
              </div>
    </>
}