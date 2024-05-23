import { Link } from 'react-router-dom';
import DynamicTitle from '../../Component/DynamicTitle/DynamicTitle';
import { useForm } from "react-hook-form"
import { useState } from 'react';
const Register = () => {
const [showPass, setShowPass] = useState(false) ;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
    return (
      <div>
        <DynamicTitle titleName={'Register'} > </DynamicTitle>
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
          

          <div className="mt-3 w-full">
            <p className="text-center font-bold text-3xl mb-10 ">
              Please Register {" "}
            </p>
          </div>
          <div className="flex shadow-md">
            <div
              className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style= {{width: '24rem', height: '32rem'}} 
            >
              <div className="w-72">
                <h1 className="text-xl font-semibold">Welcome back</h1>
                <small className="text-gray-400">
                  Welcome back! Please enter your details
                </small>
  
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Name
                    </label>
                    <input
                    {...register("name", { required: true, maxLength: 20 })}
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                     {errors.name?.type === "required" && (
                      <p className='text-red-600'>Name is required</p>
                    )}
                     {errors.name?.type === "maxLength" && (
                      <p className='text-red-600'>Name should not be lenght 20 char</p>
                    )}

                  </div>
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Email
                    </label>
                    <input
                    {...register("email", { required: true })}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                    {errors.email?.type === "required" && (
                      <p className='text-red-600'>Email is required</p>
                    )}
                  </div>
  
                  <div className="mb-3 relative ">
                    <label className="mb-2 block text-xs font-semibold">
                      Password
                    </label>
                    <input
                    {...register("password",
                     { 
                      required: true, 
                      minLength: 6, 
                      maxLength: 20,
                      pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                     })}
                      type="password"
                      name="password"
                      placeholder="*****"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                    <span className='absolute right-0 top-1/2' > show </span>
                    {errors.password?.type === "required" && (
                      <p className='text-red-600' >password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className='text-red-600' >password lenght must be 6 char</p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className='text-red-600' >password should not be lenght 20 char</p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className='text-red-600' >password should not be one uppercase, one lowercase and one special charecter</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <input className={`mb-1.5 block w-full text-center text-white bg-green-500 hover:bg-green-900 px-2 py-1.5 rounded-md cursor-pointer`}  type="submit" value="Sign up" />
                    <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                      <img
                        className="w-5 mr-2"
                        src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                      />
                      Sign in with Google
                    </button>
                  </div>
                </form>
  
                <div className="text-center">
                  <span className="text-xs text-gray-400 font-semibold">
                    Already have an account?
                  </span>
                  <Link className="text-xs font-semibold text-purple-700" to="/login"> Sign in </Link>
                </div>
              </div>
            </div>
  
            <div
              className="flex flex-wrap content-center justify-center rounded-r-md"
              style={{width: '24rem', height: '32rem'}}
            >
              <img
                className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
                src="https://i.imgur.com/9l1A4OS.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Register;