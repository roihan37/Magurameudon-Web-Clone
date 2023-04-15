import { Link } from "react-router-dom";

export function Navbar(){
    return (
      <div className='mx-[150px] my-[15px]'>
      <div className='w-full h-20 flex flex-row justify-between items-center border-b'>
        <div>
          <img className='w-72' src='https://www.marugameudon.co.id/webroot/assets/img/logo.svg' alt='' />
        </div>
        <div className='flex flex-row w-[550px] justify-center min-h-min items-center ' >
          <Link to='/'>
            <h1 className='font-bold text-sm mr-[25px] px-[4px] hover:text-gray-700 text-gray-500 '>HOME</h1>
          </Link>
          <div className='w-[2px] h-[12px] mr-[25px] bg-gray-500'></div>
          <Link to='/about'>
            <h1 className='font-bold mr-[25px] text-sm hover:text-gray-700 px-[4px] text-gray-500 '>ABOUT US</h1>
          </Link>
          <div className='w-[2px] mr-[25px] h-[12px] bg-gray-500'></div>
          <Link to='/menu'>
            <h1 className='font-bold text-sm hover:text-gray-700 px-[4px] text-gray-500 '>OUR MENU</h1>
          </Link>
          
        </div>

      </div>
    </div>
    )
}