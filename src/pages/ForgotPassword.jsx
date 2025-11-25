import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmitted = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Logo />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-3rem)]">
        {submitted ? (
          <>
            <img
              src="./images/inbox.png"
              alt="img"
              className="w-40 bg-orange-200 px-8 py-4 rounded mb-2"
            />
            <h1 className="text-2xl font-semibold my-2">Check your Inbox</h1>
            <p className="max-w-sm text-sm text-center">
              We have just emailed you the instrustions and a reset password
              link to {email}. It might take a few minutes to arrive
            </p>

            <button
              type="submit"
              onClick={() => navigate("/login")}
              className="max-w-sm w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 my-2 cursor-pointer"
            >
              Back to Sign in
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-2">Forgot Password?</h1>
            <p className="text-center text-sm text-gray-600 mb-6 max-w-sm">
              We’ll send you a link to reset it. Enter your email address used
              for My Dream Place
            </p>
            <form onSubmit={handleSubmitted} className="w-full max-w-md">
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="email" className="font-medium">
                  Your email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 my-2 cursor-pointer"
              >
                Send reset link
              </button>
            </form>

            <p className="text-gray-600 mt-4 max-w-md">
              By creating an account, you agree to our{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Terms and Conditions
              </span>{" "}
              and{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Privacy Statement
              </span>
              .
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ForgotPassword;
