import { useEffect } from "react"
import { useParams } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import { getIdFoods } from "../store/actions/creator"
import { useState } from "react"
// import useFetch from "../Hooks/useFetch";
// useEffect

export function FoodDetailPage(){

    const { id } = useParams()
    const dispatch = useDispatch()
    
    const {food, isLoadingFoodDetail} = useSelector((state) => state.foods)

    useEffect(() => {
        dispatch(getIdFoods(id))  
    }
    // eslint-disable-next-line
    ,[])
    
    const [foodState, setfoodState ] = useState({ 
        ingredients : [],
        
        category : {}
        
    })
    
    useEffect(() => {
        setfoodState({
            ingredients : food?.Ingredients || [],
            category : food?.Category || {}
        }) 
        
    },[food])
    // eslint-disable-next-line
    if(isLoadingFoodDetail == true){ 
        
        return <div className='w-full  flex justify-center '>
        <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt=''/>
    </div>
    }
    
    return (
        <div className='mx-[150px] my-[15px] flex flex-col items-center'>
            {/* <p>{food}</p> */}
            <div className="bg-grey-100 w-full h-[55px] mt-[11px] flex items-baseline justify-end">
                {/* <h1 className="float-right mr-[20px] font-light text-gray-600">Sort by :</h1>
                <select className="border-[1px] rounded-lg h-[35px] w-[500px] text-stone-400">
                    <option className="float-right font-light">Udon</option>
                </select> */}
            </div>

            <div className="flex flex-row justify-center  w-full">
                <div className="">
                    <img className="w-[400px]" src={food.imgUrl} alt="" />
                </div>
                <div className="w-[500px] ml-[150px]">
                    <h1 className="text-4xl font-bold mt-[20px] text-gray-600">{food.name}</h1>
                    <div className="border-b border-orange-600 mt-[20px]">
                        <h1 className="text-[20px] font-bold text-gray-600">Details</h1>
                    </div>
                    <h1 className=" mt-[5px] text-gray-600">{food.description}</h1>
                    <div className="border-b border-orange-600 mt-[20px]">
                        <h1 className="text-[20px] font-bold text-gray-600">Category</h1>
                    </div>
                    <div className="flex flex-col mt-[5px]">
                        
                                    <h1 className="text-gray-600">{foodState.category.name}</h1>
                            
                    </div>
                    <div className="border-b border-orange-600 mt-[20px]">
                        <h1 className="text-[20px] font-bold text-gray-600">Ingredients</h1>
                    </div>
                    
                    <div className="flex flex-col mt-[5px]">
                        { foodState.ingredients.length ?
                            foodState.ingredients.map((el) => {
                                return (
                                    <h1 className="text-gray-600">{el.name}</h1>
                                )
                            })
                            : <h1 className="text-gray-600">Empety</h1>
                        }
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}