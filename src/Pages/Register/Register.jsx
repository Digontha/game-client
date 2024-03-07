import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className='lg:flex items-center flex-row-reverse lg:w-full bg-[#171F13] lg:h-[100vh] text-white'>
            <div className='lg:w-1/2 flex flex-col justify-center items-center mt-10 '>
                    <h1 className="text-2xl font-semibold  ">Register</h1>
                    <div className="card lg:w-full">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Image URL" name="image" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <Link className="text-center" to="/login"><p>Have a account? <span className="font-bold btn btn-link">login</span></p></Link>
                        <div className="p-5">
                            <button className="btn btn-sm btn-neutral w-full"><FaGoogle></FaGoogle> Google</button>
                        </div>
                    </div>

                </div>
                <div className='lg:w-1/2'>
                    <img src="https://i.pinimg.com/originals/4b/bb/6a/4bbb6aafcb5ceaf80a9cbd3e4ff0ba5a.png" alt="" />
                </div>
            </div>

        </>
    );
};

export default Register;