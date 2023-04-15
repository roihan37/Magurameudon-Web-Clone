import { Link } from "react-router-dom";

export function FoodCard({food}){
    return (
       
            <Link to={`/menu/${food.id}`} className='flex flex-col items-center mb-[50px] '>
                <img className='w-64 hover:w-[250px] object-cover ' src={food.imgUrl} alt='' />
                <h1 className='text-lg font-light text-gray-600'>{food.name}</h1>
            </Link>
            
    )
}