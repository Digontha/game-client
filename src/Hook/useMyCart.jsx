
import useAxiosPublic from '../Axios/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMyCart = () => {
    const axiosPublic =useAxiosPublic();
    const {data: MyCart = [],isPending: loading,refetch} = useQuery({
        queryKey: ['MyCart'],
        queryFn: async() =>{
            const res =await axiosPublic.get('/carts');
            return res.data;
        }
    })

     return [MyCart,loading,refetch]
};

export default useMyCart;