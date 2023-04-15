import { useEffect } from "react";
import { FoodCard } from "../components/FoodCard";
import { useSelector, useDispatch } from 'react-redux'
import { fecthFoods } from "../store/actions/creator";
// import useFetch from "../Hooks/useFetch";

export function OurMenuPage() {

    const dispatch = useDispatch()
    const {foods, isLoading} = useSelector((state) => state.foods)

    useEffect(() => {
        dispatch(fecthFoods())
       // eslint-disable-next-line
    },[])

    if(isLoading === true){
        return <div className='w-full  flex justify-center '>
            <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt=''/>
        </div>
       }
    return (
        <div className='mx-[150px] my-[15px] mt-[70px] '>
            {/* <div className="bg-grey-100 w-full h-[55px] mt-[11px] flex items-baseline justify-end">
                <h1 className="float-right mr-[20px] font-light text-gray-600">Sort by :</h1>
                <select className="border-[1px] rounded-lg h-[35px] w-[500px] text-stone-400">
                    <option className="float-right font-light">Udon</option>
                </select>
            </div> */}

        
            <div className='grid grid-cols-4  '>
                {
                    foods.map((food) => {
                        return <FoodCard food={food} key={food.id} />
                    })
                }
            </div>


            <div className='my-[25px] w-full h-[40px] border-b pb-[70px]'>
                {/* <div className="bg-grey-100 w-full h-[55px] mt-[23px] flex items-baseline justify-end">
                    <h1 className="float-right mr-[20px] font-light text-gray-600">Sort by :</h1>
                    <select className="border-[1px] rounded-lg h-[35px] w-[500px] text-stone-400">
                        <option key={1} className="float-right font-light">Udon</option>
                    </select>
                
                </div> */}
            </div>
        </div>
        
    )
}