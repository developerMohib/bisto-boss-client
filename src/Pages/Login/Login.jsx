import { Link } from "react-router-dom";
import DynamicTitle from "../../Component/DynamicTitle/DynamicTitle";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import AuthProvider from "../../AuthProvider/AuthProvider";
const Login = () => {
  const {loginWithEmailPass, user} = useContext(AuthProvider)
  const captchaRef = useRef(null) ;
  const [disabled, setDisabled] = useState(true)

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin = (e) => {
    e.preventDefault() 
    const form = e.target ;
    const email = form.email.value ;
    const password = form.password.value ;
    
    // login 
    loginWithEmailPass(email, password)
    .then(dp => {
      console.log(dp.user)
      toast.success('from log in then')
    })
    .catch(err => {
      console.log(err.message)
      toast.error('from log in error')
    })
  }
  const handleCaptchaValid = () => {
    const value = captchaRef.current.value ;
    if(validateCaptcha(value)){
      toast.success('Successfully Matched!')
      setDisabled(false)
    }else{
      toast.error("It doesn't match")
      setDisabled(true)
    }
  }

  return (
    <div>
      <DynamicTitle titleName={"Login"}></DynamicTitle>

      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
          

        <div className="mt-3 w-full">
          <p className="text-center font-bold text-3xl mb-10 ">
            Please Login {" "}
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

              <form onSubmit={handleLogin} className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-1 checked:bg-purple-700"
                  />{" "}
                  <label
                    className="mr-auto text-xs font-semibold"
                  >
                    Remember for 30 days
                  </label>
                  <a href="#" className="text-xs font-semibold text-purple-700">
                    Forgot password?
                  </a>
                </div>
                {/* captcha */}
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                  <LoadCanvasTemplate />
                  </label>
                  <input
                  ref={captchaRef}
                    type="text"
                    name="captcha"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                  <button onClick={handleCaptchaValid} className="btn btn-outline btn-xs w-full my-2" > valided </button>
                </div>

                <div className="mb-3">
                  <input disabled={disabled} className={`mb-1.5 block w-full text-center text-white ${disabled ? 'opacity-60 bg-green-500' : 'bg-green-500 hover:bg-green-900'} px-2 py-1.5 rounded-md cursor-pointer`}  type="submit" value="Sign in" />
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
                  Dont have account?
                </span>
                <Link className="text-xs font-semibold text-purple-700" to="/register"> Sign up </Link>
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

export default Login;
