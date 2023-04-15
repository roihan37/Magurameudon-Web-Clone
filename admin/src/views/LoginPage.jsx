import { useState,  } from "react"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export function LoginPage(){

    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        email : '',
        password : ''
    })
    
    const [loading, setLoading] = useState({
        isLoading : false
    })

    const henddlerFormInput = (e) => {
       
        const newLoginForm = {
            ...loginForm,
            [e.target.name] : e.target.value
        }
        setLoginForm(newLoginForm) 
        
    }
   


    const henddlerLogin = async (e) => {
        
        e.preventDefault();
        try {
                const response = await fetch('https://pro.magurameudonch1p3.cloud/login',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body : JSON.stringify(loginForm)
                })
                const responseJson = await response.json()
                if(!response.ok){
                    throw new Error(responseJson.message)
                }
                
                localStorage.setItem('access_token', responseJson.access_token)
                setLoading({
                    isLoading : true
                })
                  
                const Toast = MySwal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', MySwal.stopTimer)
                      toast.addEventListener('mouseleave', MySwal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                  })
                  
                  
                  
                navigate('/') 
                
            } catch (error) {
               
                const Toast = MySwal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', MySwal.stopTimer)
                      toast.addEventListener('mouseleave', MySwal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'error',
                    title: error
                  })
            }
    
        }
    
    if(loading.isLoading === true){
        return <>
<div className='w-full  flex justify-center '>
       <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt=''/>
   </div>
        </>
    }

    return <>
            {/* LOGIN */}
      <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <img className="w-[250px] h-[70px] mr-2" src="https://www.marugameudon.co.id/webroot/assets/img/logo.svg" alt="logo" />             
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Sign in to your account
                      </h1>
                      
                      <form onSubmit={henddlerLogin} className="space-y-4 md:space-y-6" action="#">
                          <div>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input  value={loginForm.email} onChange={henddlerFormInput} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="name@company.com" />
                          </div>
                          <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input value={loginForm.password} onChange={henddlerFormInput}  type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required="" />
                          </div>
                          
                          <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Sign in</button>
                          
                      </form>
                  </div>
              </div>
          </div>
      </section>
    </>
}