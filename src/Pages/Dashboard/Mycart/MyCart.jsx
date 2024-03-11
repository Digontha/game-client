import useMyCart from "../../../Hook/useMyCart";

const MyCart = () => {
    const [MyCart]=useMyCart()
    console.log(MyCart);
    return (
        <div className="text-3xl text-white">
            This is cart
        </div>
    );
};

export default MyCart;