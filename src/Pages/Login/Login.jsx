import { Link, useLocation, useNavigate } from "react-router-dom";
import DynamicTitle from "../../Component/DynamicTitle/DynamicTitle";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthCustomContext } from "../../AuthProvider/AuthProvider";
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import FacebookLogin from "../../Shared/Social/FacebookLogin/FacebookLogin";
import GoogleLogin from "../../Shared/Social/GoogleLogin/GoogleLogin";

const Login = () => {
  const {loginWithEmailPass} = useContext(AuthCustomContext)
  const [disabled, setDisabled] = useState(true) ;
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate() ;
  const location = useLocation() ;
  const from = location?.state?.from?.pathname || '/' ;
  console.log(location?.state, 'logi in')

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
//http://localhost:5000/
  const handleLogin = (e) => {
    e.preventDefault() 
    const form = e.target ;
    const email = form.email.value ;
    const password = form.password.value ;
    
    // login email pass
    loginWithEmailPass(email, password)
    .then(dp => {
      console.log(dp.user)
      toast.success('login successfully')
      navigate( location?.state ? location?.state : '/' )
      navigate( location.state?.from?.pathname || '/' )
      navigate(from, {replace:true} )
    })
    .catch(err => {
      console.log(err.message)
      toast.error('from log in error')
    })
  }
  const handleCaptchaValid = (e) => {
    const value = e.target.value ;
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
          <Link to='/' > <button className="btn" > go home </button> </Link>
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

                <div className="mb-3 relative ">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    type={ showPass ? "text" : 'password'}
                    name="password"
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                  <span onClick={() => setShowPass(!showPass)} className="absolute right-1 top-1/2 cursor-pointer" > 
                  
                  {
                    showPass === false ? <IoMdEye className="text-2xl" /> : <IoEyeOff className="text-2xl"/>
                  }
                    </span>
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
                  onBlur={handleCaptchaValid}
                    type="text"
                    name="captcha"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3">
                  <input disabled={disabled} className={`mb-1.5 block w-full text-center text-white ${disabled ? 'opacity-60 bg-green-500' : 'bg-green-500 hover:bg-green-900'} px-2 py-1.5 rounded-md cursor-pointer`}  type="submit" value="Sign in" />
                  <GoogleLogin> </GoogleLogin>
                  <FacebookLogin> </FacebookLogin>
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
