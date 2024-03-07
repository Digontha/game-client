import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <>
        <div className='lg:flex flex-row-reverse lg:w-full bg-[#171F13] text-white'>
            <div className='lg:w-1/2 flex flex-col justify-center items-center mt-10 lg:h-[70vh]'>
                <h1 className="text-2xl font-semibold py-3">Login</h1>
                <div className="card w-full  ">
                    <form  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered text-black" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link className="text-center" to="/register"><p>Haven't any account? <span className="font-bold btn btn-link">register</span></p></Link>
                    <div className="p-5">
                        <button className="btn btn-sm btn-neutral w-full"><FaGoogle></FaGoogle> Google</button>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <img src="https://images.saymedia-content.com/.image/t_share/MTc0NDU3Njc3NjM5NTI1NzM2/hottest-female-video-game-characters.png" alt="" />
            </div>
        </div>

    </>
    );
};

export default Login;