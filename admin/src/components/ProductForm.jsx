import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate, } from "react-router"
import { addProduct, editProduct, fecthCategory, getProductByid } from "../stores/actions/creator"
import { useSelector, useDispatch } from 'react-redux'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

export function ProductForm({ id }) {
    const MySwal = withReactContent(Swal)
    //  console.log();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { product, isLoadingAdd, isLoadingEdit } = useSelector((state) => state.products)
    const { categories, isLoadingCategory } = useSelector((state) => state.categories)

    useEffect(() => {
        if (id) {
            dispatch(getProductByid(id))
        }
        dispatch(fecthCategory())

    }
        // eslint-disable-next-line
        , [id])

    console.log(product, '<<< borr');

    const [formProduct, setFormProduct] = useState({
        name: '',
        description: '',
        price: 1,
        imgUrl: '',
        categoryId: 1,
        nameIngredient: [],
        inggredientLimit: ['', '', '']
    })



    useEffect(() => {
        setFormProduct({
            name: product?.name || '',
            description: product?.description || '',
            price: product?.price || 10000,
            imgUrl: product?.imgUrl || '',
            categoryId: product?.categoryId || 1,
            nameIngredient: product?.Ingredients?.map(val => val?.name) || [],
            inggredientLimit: formProduct.inggredientLimit || ['', '', '']
        })
        // eslint-disable-next-line
    }, [product])



    const handdleForm = (e) => {

        const newForm = {
            ...formProduct,
            [e.target.name]: e.target.value,
            // inggredientLimit : [e.target.value]

        }

        setFormProduct(newForm)
    }

    const henddlerSubmitProduct = async (e) => {
        e.preventDefault();
        // dispatch(pendingAddProduct())
        try {
            if (!id) {
                await dispatch(addProduct(formProduct))
                // dispatch(successAddProduct())
                MySwal.fire({
                    icon: 'success',
                    title: 'Successful Product Created',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')


            } else {
                await dispatch(editProduct(formProduct, id))
                MySwal.fire({
                    icon: 'success',
                    title: 'Product Success Edited',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            }
        } catch (error) {
            console.log(error, '<<<< in component');
            MySwal.fire({
                icon: 'error',
                title: error,
                showConfirmButton: false,
                timer: 1500
            })
        }

    }


    if (isLoadingCategory === true) {
        return (
            <div className='w-full  flex justify-center '>
                <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt='' />
            </div>
        )
    }
    if (isLoadingAdd === true) {
        return (
            <div className='w-full  flex justify-center '>
                <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt='' />
            </div>
        )
    }

    if (isLoadingEdit === true) {
        return (
            <div className='w-full  flex justify-center '>
                <img className='w-[500px]' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt='' />
            </div>
        )
    }


    return <>

        <form onSubmit={henddlerSubmitProduct} className="space-y-4 md:space-y-6" action="#">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="name" name="name" onChange={handdleForm} value={formProduct.name} id="name" placeholder="Name Your Product" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea placeholder="Description Your Product" onChange={handdleForm} value={formProduct.description} type="description" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input placeholder="Price Your Product" onChange={handdleForm} type="number" value={formProduct.price} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <select placeholder="Price Your Product" onChange={handdleForm} type="number" value={formProduct.categoryId} name="categoryId" id="categoryId" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" >
                    {
                        categories.map((el, i) => {
                            return (
                                <option value={el.id} key={i}>{el.name}</option>
                            )
                        })
                    }

                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                <input placeholder="Image Url Your Product" onChange={handdleForm} type="imgUrl" value={formProduct.imgUrl} name="imgUrl" id="imgUrl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required="" />
            </div>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingredients </label>
            {id ? formProduct?.nameIngredient?.map((el, i) => {
                return <div key={`ingredient-${i}`}>
                    <input
                        onChange={e => {
                            const currIngredient = [...formProduct.nameIngredient]
                            currIngredient[i] = e.target.value

                            setFormProduct({
                                ...formProduct,
                                nameIngredient: currIngredient
                            })
                            // }
                        }}
                        placeholder="Ingredient in your product" value={el} name={`nameIngredient[${i}]`} id="imageUrl" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required="" />
                </div>
            }) : ''}


            {!id ?
                <div >
                    <div className="flex items-baseline">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Ingredients</label>
                        <p className="text-xs ml-[10px] text-red-500">* minimum 3 ingredient</p>
                    </div>
                    {formProduct.inggredientLimit.map((el, i) => {
                        return (
                            <input placeholder="Ingredient in your product" onChange={e => {
                                const currIngredient = [...formProduct.inggredientLimit]
                                currIngredient[i] = e.target.value
                                // console.log(currIngredient,'<<<< curent')
                                // if(!currIngredient){
                                setFormProduct({
                                    ...formProduct,
                                    inggredientLimit: currIngredient
                                })
                                // }
                            }} value={el} name='inggredientLimit' type="imageUrl" id="imageUrl" className="mb-[20px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" required="" />
                        )
                    })}
                </div>
                : ''
            }





            <div className='flex w-[400px] float-right'>

                <button type="submit" className="w-full mr-[10px] text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">{id ? 'Edit' : 'Add'}</button>


                <Link to='/' className="w-full border border-black text-black bg-white-600 hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                    <button   >
                        Cancel
                    </button>
                </Link>
            </div>
        </form>

    </>
}