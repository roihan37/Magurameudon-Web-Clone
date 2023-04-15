export function TableProductRow({ product, i, openModal, Link, henddleDelete }) {
    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    return (
        <>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {i + 1}
                </th>
                <td className="px-6 py-4">
                    {product.name}
                </td>
                <td className="px-6 py-4">
                    {product.Category.name}
                </td>
                <td className="px-6 py-4">
                    {
                        rupiah(product.price)
                    }
                </td>
                <td className="px-6 py-4 text-right">
                    {product.User.email}
                </td>
                <td className="px-6 py-4 text-right">
                    <img className='w-[80px]' src={product.imgUrl} alt='' />
                </td>
                <td className="px-6 py-4 text-right">
                    <button onClick={() => { openModal(product.id) }} type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Show</button>
                </td>
                <td className=" text-right ">
                    <Link to={`/edit-product/${product.id}`} className="font-medium text-black dark:text-black hover:underline">Edit</Link>
                    <button onClick={() => { henddleDelete(product.id) }} className=" ml-[10px] mr-[10px] font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
            </tr>

        </>
    )
}