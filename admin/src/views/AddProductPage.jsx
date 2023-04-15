import { ProductForm } from "../components/ProductForm";

export function AddProductPage(){
    return (
        <>
         <div className='ml-[350px] mr-[95px] mt-[75px] mb-[100px]'>
            <h1 className='text-5xl font-light mb-[30px]'>Create Product</h1>
            < ProductForm />
        </div>
        </>
    )
}