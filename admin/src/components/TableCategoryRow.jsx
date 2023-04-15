export function TableCategoryRow({ el, i, henddleDelete }) {
    return (


        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {i + 1}
            </th>
            <td className="px-6 py-4">
                {el.name}
            </td>
            <td className="px-6 py-4">
                {el.createdAt.split('T')[0]}
            </td>
            <td className="px-6 py-4">
                {el.updatedAt.split('T')[0]}
            </td>
            <td >
                <button onClick={(e) => {
                    e.preventDefault();
                    henddleDelete(el.id)
                }} className=" ml-[25px] font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
            </td>
        </tr>



    )
}