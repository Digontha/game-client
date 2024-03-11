import useMyCart from "../../../Hook/useMyCart";

const MyCart = () => {
    const [MyCart] = useMyCart()
    console.log(MyCart);
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="-m-1.5 overflow-x-auto w-full">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow w-full">
                            <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Game</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Price</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {
                                        MyCart?.map(cartItem => <>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-gray-200">{cartItem?.title}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">${cartItem?.salePrice}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">{cartItem?.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                                                </td>
                                            </tr>
                                        </>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCart;