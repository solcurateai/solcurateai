"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HOST } from '@/constants';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS
import { OtpInput } from 'reactjs-otp-input';
import { Check, Loader, X } from 'lucide-react';


const Login = () => {
  const { register, handleSubmit, watch } = useForm(); // Single useForm instance
  const [loginData, setLoginData] = useState(null);
  const [otpRequired, setOtpRequired] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [usernameRequired, setUsernameRequired] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading
  const router = useRouter();
  const [usernameAvailable, setUsernameAvailable] = useState(null);
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [accessToken, setAccessToken] = useState(null)



  // Function to show loader toast
  const showLoader = () => {
    toast.info('Processing... Please wait', {
      autoClose: false, // Don't close the toast automatically
      position: "top-center",
      isLoading: true, // Loading state
    });
  };

  // Function to dismiss loader toast
  const dismissLoader = () => {
    toast.dismiss();
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (value.length > 1) return; // Only single digit allowed

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      // Move to the next input if digit entered and not on the last input
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace to auto-focus the previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onEmailSubmit = async (data) => {
    showLoader(); // Show loader when API call starts
    try {
      const response = await fetch(`${HOST}/User/SignIn?type=email`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      dismissLoader(); // Dismiss the loader after response
      
      if (responseData.success) {
        setLoginData(responseData.data);
        toast.success('Login successful!');

        if (responseData.data.username === " ") {
          setOtpRequired(true); // Show OTP form if username is empty
        } else {
          router.push("/app"); // Redirect to dashboard
        }
      } else {
        toast.error('Login failed. Please try again.');
      }
    } catch (error) {
      dismissLoader();
      toast.error('Something went wrong. Please try again.');
      console.log(error);
    }
  };

  const onOtpSubmit = async (data) => {
    const completeOtp = otp.join("");
    if (completeOtp.length < 4) {
      toast.error("Please enter all 4 digits");
    } else {
      showLoader();
      try {
        const otpResponse = await fetch(`${HOST}/User/Verify`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: loginData.id, otp: completeOtp }),
        });

        const otpResponseData = await otpResponse.json();
        dismissLoader();

        if (otpResponseData.success) {
          if (!otpResponseData.data.username || otpResponseData.data.username === " ") {
            setUsernameRequired(true);
            setOtpRequired(false);
            setAccessToken(otpResponseData.data.accessToken);
            toast.success('OTP verified. Please set your username.');
          } else {
            router.push("/dashboard");
          }
        } else {
          toast.error('OTP verification failed.');
        }
      } catch (error) {
        dismissLoader();
        toast.error('Something went wrong.');
        console.log(error);
      }
    }

  };


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (watch("username")) {
        checkUsernameAvailability(watch("username"));
      }
    }, 500); // delay by 500ms
  
    return () => clearTimeout(delayDebounceFn);
  }, [watch("username")]);

  const checkUsernameAvailability = async (username) => {
    setIsCheckingUsername(true);
    try {
      const response = await fetch(`${HOST}/User/Profile/CheckUsername`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ username }),
      });
  
      const data = await response.json();
      if (data.success) {
        setUsernameAvailable(true);
      } else {
        setUsernameAvailable(false);
      }
    } catch (error) {
      console.log("Error checking username", error);
    } finally {
      setIsCheckingUsername(false);
    }
  };
  
  

  const onUsernameSubmit = async (data) => {
    showLoader();
    try {
      const usernameResponse = await fetch(`${HOST}/User/Profile/UpdateUsername`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ username: data.username }),
      });

      const usernameResponseData = await usernameResponse.json();
      dismissLoader();
      console.log(usernameResponseData);
      if (usernameResponseData.success) {
        toast.success('Username set successfully!');
        router.push("/dashboard");
      } else {
        toast.error('Failed to set username.');
      }
    } catch (error) {
      dismissLoader();
      toast.error('Something went wrong.');
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] text-white">
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <h1 className="text-2xl font-semibold">Login</h1>
          <h2 className="font-clash font-medium">Welcome Back 👋</h2>
          <p className="text-balance text-white font-quicksand">
            Login to your account and start creating your content.
          </p>
        </div>

        {/* Username Setup Form */}
        {usernameRequired ? (
          <form onSubmit={handleSubmit(onUsernameSubmit)} className="flex flex-col gap-4">
          <div className="relative flex items-center w-full">
            <Input
              className={`bg-[#252C33] h-[52px] text-lg mt-5 w-full pr-10 ${
                usernameAvailable === false && !isCheckingUsername && watch("username") ? "border-red-500" : ""
              } ${
                usernameAvailable === true && !isCheckingUsername && watch("username") ? "border-green-500" : ""
              }`}
              type="text"
              placeholder="Set your username"
              {...register("username")}
            />
        
            {watch("username") && isCheckingUsername && (
              <Loader className="absolute right-2 top-8 text-sm text-gray-500" />
            )}
            {watch("username") && usernameAvailable === false && !isCheckingUsername && (
              <X className="absolute right-2 top-8 text-sm text-red-500" />
            )}
            {watch("username") && usernameAvailable === true && !isCheckingUsername && (
              <Check className="absolute right-2 top-8 text-green-500" />
            )}
          </div>
        
          <Button
            className="main-gradient inline-block rounded-lg w-full my-5 px-8 py-3 text-center font-semibold tracking-tight !text-white transition duration-200 hover:font-bold bg-gradient-to-tr from-yellow-400 to-orange-600"
            type="submit"
            disabled={isCheckingUsername || usernameAvailable === false || !watch("username")} // Disable if username is not available, still checking, or empty
          >
            Set Username
          </Button>
        </form>
        
        
        ) : otpRequired ? (
          // OTP Verification Form
          <form onSubmit={handleSubmit(onOtpSubmit)} className="flex flex-col gap-4">

            <div className="flex gap-2">
              {otp.map((_, index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 text-center text-2xl border rounded-md"
                />
              ))}
            </div>

            <Button
              className="main-gradient inline-block rounded-lg w-full my-5 px-8 py-3 text-center font-semibold tracking-tight !text-white transition duration-200 hover:font-bold bg-gradient-to-tr from-yellow-400 to-orange-600"
              type="submit"
            >
              Verify OTP
            </Button>
          </form>
        ) : (
          // Email Login Form
          <form onSubmit={handleSubmit(onEmailSubmit)}>
            <Input
              className="bg-[#252C33] h-[52px] text-lg mt-5"
              type="email"
              placeholder="Username or email"
              {...register("email")}
            />
            <Button
              className="main-gradient inline-block rounded-lg w-full my-5 px-8 py-3 text-center font-semibold tracking-tight !text-white transition duration-200 hover:font-bold bg-gradient-to-tr from-yellow-400 to-orange-600"
              type="submit"
            >
              Continue
            </Button>

            <div className="flex items-center gap-3">
              <div className="border flex-1 border-[#a7a7a7]"></div>
              <div>OR</div>
              <div className="border flex-1 border-[#a7a7a7]"></div>
            </div>

            <Button
              type="button"
              className="main-gradient inline-block rounded-lg w-full my-5 px-8 py-3 text-center font-semibold tracking-tight !text-white transition duration-200 hover:font-bold bg-gradient-to-tr from-yellow-400 to-orange-600"
            >
              Connect Wallet
            </Button>
          </form>
        )}
      </div>

      {/* React Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
