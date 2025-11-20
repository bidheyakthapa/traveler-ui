import { useEffect } from "react";

const Toast = ({ message, status, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`${
        status === "success" ? "bg-green-500" : "bg-red-500"
      } px-4 py-2 rounded fixed top-0 right-0 mt-10 mr-16 z-50 shadow-lg`}
    >
      <p className="text-white text-xl font-semibold">{message}</p>
    </div>
  );
};

export default Toast;
