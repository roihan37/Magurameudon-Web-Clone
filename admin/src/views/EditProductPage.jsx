import { useParams } from "react-router-dom";
import { ProductForm } from "../components/ProductForm";

export function EditProductPage(){
    const { id } = useParams()
    console.log(id, '<< id');
    return (
        <>
         <div className='ml-[350px] mr-[95px] mt-[75px] mb-[100px]'>
            <h1 className='text-5xl font-light mb-[30px]'>Edit Product</h1>
            < ProductForm id={id} />
        </div>
        </>
    )
}