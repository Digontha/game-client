import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import swal from "sweetalert";
import useAxiosPublic from "../../Axios/useAxiosPublic";

const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const handleRegister = (e) => {

    e.preventDefault();
    const name = e.target.name.value
    const image = e.target.image.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name, image, email, password);

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`])[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`]{7,}$/.test(password)) {

      swal("error", "password must be at least 6 characters one capital letter and one special letter", "error");
    } else {
      createUser(email, password, name, image)
        .then(res => {
          console.log(res.user);
          swal("success", "Your account create successfully", "success");
          updateProfile(res.user, { displayName: name, photoURL: image })
            .then(() => {
                console.log(res);
              const userData = {
                email,
                name,
                image,
                subscribe: false,
              }
              axiosPublic.post("/users", userData)
                .then(res => console.log(res.data))
              navigate("/")
            })
          e.target.reset()
        })
        .catch(() => {

          swal("error", "something went wrong", "error");
        })
    }

  }
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
      console.log(res.data);
        // const userData = {
        //   email: res.user.email,
        //   name: res.user.displayName,
        //   image: res.user.photoURL,
        //   subscribe: false

        // }
        // axiosPublic.post("/users", userData)
        //   .then(res => console.log(res.data))
        swal("success", "Your account create successfully", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("error", "something went wrong", "error");
      })
  }

    return (
        <>
            <div className='lg:flex items-center flex-row-reverse lg:w-full bg-[#171F13] lg:h-[100vh] text-white'>
            <div className='lg:w-1/2 flex flex-col justify-center items-center mt-10 '>
                    <h1 className="text-2xl font-semibold  ">Register</h1>
                    <div className="card lg:w-full">
                        <form onSubmit={handleRegister} className="card-body">
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
                            <button onClick={handleGoogle} className="btn btn-sm btn-neutral w-full"><FaGoogle></FaGoogle> Google</button>
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