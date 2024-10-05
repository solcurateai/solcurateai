"use client";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HOST } from "@/constants";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toastify CSS
import { OtpInput } from "reactjs-otp-input";
import { Check, Loader, X } from "lucide-react";
import {
  setUser,
  setUsernameAvailability,
  setCheckingUsername,
  setAccessToken,
} from "@/redux/slices/userSlices";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import WalletConnection from "@/components/WalletConnection";

const Login = () => {
  const { register, handleSubmit, watch } = useForm(); // Single useForm instance
  const [loginData, setLoginData] = useState(null);
  const [otpRequired, setOtpRequired] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [usernameRequired, setUsernameRequired] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading
  const router = useRouter();

  const dispatch = useDispatch();
  const {
    userData,
    isAuthenticated,
    isCheckingUsername,
    usernameAvailable,
    accessToken,
  } = useSelector((state) => state.user);

  // Function to show loader toast
  const showLoader = () => {
    toast.info("Processing... Please wait", {
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

  // Handle email login
  const onEmailSubmit = async (data) => {
    showLoader();
    try {
      const response = await fetch(`${HOST}/User/SignIn?type=email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      dismissLoader();
      console.log(responseData);
      if (responseData.success) {
        dispatch(setUser(responseData.data));
        dispatch(setAccessToken(responseData.data.accessToken));

        // console.log(responseData);
        // if (!responseData.data.username || responseData.data.username === " ") {
        //   setOtpRequired(true);
        // } else {
        //   localStorage.setItem("freeTrialCount", "10");
        //   router.push("/app");
        // }

        setOtpRequired(true);
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      dismissLoader();
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Handle OTP verification
  const onOtpSubmit = async (data) => {
    const completeOtp = otp.join("");
    if (completeOtp.length < 4) {
      toast.error("Please enter all 4 digits");
    } else {
      showLoader();
      try {
        const otpResponse = await fetch(`${HOST}/User/Verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: userData.id, otp: completeOtp }),
        });

        const otpResponseData = await otpResponse.json();
        dismissLoader();

        if (otpResponseData.success) {
          // if (
          //   !otpResponseData.data.username ||
          //   otpResponseData.data.username === " "
          // ) {
          //   dispatch(setUsernameAvailability(null));
          //   dispatch(setAccessToken(otpResponseData.data.accessToken));
          //   setUsernameRequired(true);
          //   setOtpRequired(false);
          //   toast.success("OTP verified. Please set your username.");
          // } else {
          //   localStorage.setItem("freeTrialCount", "10");
          //   router.push("/app");
          // }
          toast.success("OTP verified. Please set your username.");
          dispatch(setAccessToken(otpResponseData.data.accessToken));
          localStorage.setItem("freeTrialCount", "10");
          router.push("/app");
        } else {
          toast.error("OTP verification failed.");
        }
      } catch (error) {
        dismissLoader();
        toast.error("Something went wrong.");
      }
    }
  };

  // Handle username availability check
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (watch("username")) {
        checkUsernameAvailability(watch("username"));
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [watch("username")]);

  const checkUsernameAvailability = async (username) => {
    dispatch(setCheckingUsername(true));
    try {
      const response = await fetch(`${HOST}/User/Profile/CheckUsername`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      if (data.success) {
        dispatch(setUsernameAvailability(true));
      } else {
        dispatch(setUsernameAvailability(false));
      }
    } catch (error) {
      console.log("Error checking username", error);
    } finally {
      dispatch(setCheckingUsername(false));
    }
  };

  const onUsernameSubmit = async (data) => {
    showLoader();
    try {
      const usernameResponse = await fetch(
        `${HOST}/User/Profile/UpdateUsername`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ username: data.username }),
        }
      );

      const usernameResponseData = await usernameResponse.json();
      dismissLoader();

      if (usernameResponseData.success) {
        toast.success("Username set successfully!");
        dispatch(setUser(usernameResponseData.data));
        localStorage.setItem("freeTrialCount", "10");
        router.push("/app");
      } else {
        toast.error("Failed to set username.");
      }
    } catch (error) {
      dismissLoader();
      toast.error("Something went wrong.");
    }
  };
  return (
    <>
      <div className='bg-[orange]  p-2 w-full'>
        <p className='text-center text-sm text-[black]'>Please note: This is on a free version server, loading time might be slow.</p>
      </div>
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
            <form
              onSubmit={handleSubmit(onUsernameSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="relative flex items-center w-full">
                <Input
                  className={`bg-[#252C33] h-[52px] text-lg mt-5 w-full pr-10 ${usernameAvailable === false &&
                    !isCheckingUsername &&
                    watch("username")
                    ? "border-red-500"
                    : ""
                    } ${usernameAvailable === true &&
                      !isCheckingUsername &&
                      watch("username")
                      ? "border-green-500"
                      : ""
                    }`}
                  type="text"
                  placeholder="Set your username"
                  {...register("username")}
                />

                {watch("username") && isCheckingUsername && (
                  <Loader className="absolute right-2 top-8 text-sm text-gray-500" />
                )}
                {watch("username") &&
                  usernameAvailable === false &&
                  !isCheckingUsername && (
                    <X className="absolute right-2 top-8 text-sm text-red-500" />
                  )}
                {watch("username") &&
                  usernameAvailable === true &&
                  !isCheckingUsername && (
                    <Check className="absolute right-2 top-8 text-green-500" />
                  )}
              </div>

              <Button
                className="main-gradient inline-block rounded-lg w-full my-5 px-8 py-3 text-center font-semibold tracking-tight !text-white transition duration-200 hover:font-bold bg-gradient-to-tr from-yellow-400 to-orange-600"
                type="submit"
                disabled={
                  isCheckingUsername ||
                  usernameAvailable === false ||
                  !watch("username")
                } // Disable if username is not available, still checking, or empty
              >
                Set Username
              </Button>
            </form>
          ) : otpRequired ? (
            // OTP Verification Form
            <form
              onSubmit={handleSubmit(onOtpSubmit)}
              className="flex flex-col gap-4"
            >
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

              {/* <div className="flex items-center gap-3">
                <div className="border flex-1 border-[#a7a7a7]"></div>
                <div>OR</div>
                <div className="border flex-1 border-[#a7a7a7]"></div>
              </div>

              
              <WalletMultiButton style={{}} /> */}
            </form>
          )}
        </div>

        {/* React Toastify Container */}
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;