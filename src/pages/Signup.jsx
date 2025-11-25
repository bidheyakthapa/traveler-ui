import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Toast from "../components/Toast";
import Logo from "../components/Logo";

const Register = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", status: "" });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleNext = (e) => {
    e.preventDefault();
    if (!email) {
      setToast({
        show: true,
        message: "Please enter a valid email.",
        status: "error",
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setToast({
        show: true,
        message: "Passwords do not match.",
        status: "error",
      });
      return;
    }

    if (password.length < 10) {
      setToast({
        show: true,
        message: "Password must be at least 10 characters long.",
        status: "error",
      });
      return;
    }

    console.log({ email, password });
    navigate("/login");
  };

  const handleToastClose = () =>
    setToast({ show: false, message: "", status: "" });

  return (
    <div>
      <Logo />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-3rem)]">
        {step === 1 ? (
          <>
            <h1 className="text-2xl font-semibold mb-6">Register</h1>
            <form onSubmit={handleNext} className="w-full max-w-md">
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="email" className="font-medium">
                  Email address
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
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
              >
                Continue with email
              </button>

              <div className="my-6 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">
                  or continue with
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full py-2 border border-gray-300 rounded hover:bg-gray-50 transition cursor-pointer"
                >
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="w-full py-2 bg-[#475993] text-white rounded hover:bg-[#3a4a7a] transition cursor-pointer"
                >
                  Continue with Facebook
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-8">
                Already have an account?
                <Link
                  to="/login"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-2">Create password</h1>
            <p className="text-center text-sm text-gray-600 mb-6 max-w-sm">
              Use a minimum of 10 characters, including uppercase letters,
              lowercase letters, and numbers.
            </p>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-3 pr-10 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-6">
                <label htmlFor="confirmPassword" className="font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-3 pr-10 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
              >
                Create account
              </button>
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
            </form>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-4 text-blue-600 text-sm hover:underline"
            >
              ← Back to email
            </button>
          </>
        )}

        {toast.show && (
          <Toast
            message={toast.message}
            isVisible={toast.show}
            status={toast.status}
            onClose={handleToastClose}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
