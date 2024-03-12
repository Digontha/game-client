
import { useContext } from 'react';
import useAxiosPublic from '../Axios/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider'

const useMyCart = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic =useAxiosPublic();
    const {data: MyCart = [],isPending: loading,refetch} = useQuery({
        queryKey: ['MyCart'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/carts?email=${user?.email}`);
            return res.data;
        }
    })

     return [MyCart,loading,refetch]
};

export default useMyCart;