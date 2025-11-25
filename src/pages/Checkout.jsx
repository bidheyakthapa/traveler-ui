import { FaCircleUser, FaCreditCard, FaStar } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import Nav from "../components/Nav";
import Note from "../components/Note";
import usePropertyDetails from "../store";
import { useState } from "react";
import Toast from "../components/Toast";

const Checkout = () => {
  const property = usePropertyDetails((store) => store.propertyDetails);

  const { name, rating, reviewCount, image } = property || {};

  const [showCouponField, setShowCouponField] = useState(false);

  const [toast, setToast] = useState({
    message: "",
    status: "",
    isVisible: false,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    receiveAlerts: false,

    cardName: "",
    cardNumber: "",
    cardMobile: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    zipCode: "",

    couponCode: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    // Name: letters and spaces only
    const nameRegex = /^[A-Za-z\s]+$/;
    if (
      !formData.firstName.trim() ||
      !nameRegex.test(formData.firstName.trim())
    ) {
      newErrors.firstName = "First name must contain only letters and spaces.";
    }
    if (
      !formData.lastName.trim() ||
      !nameRegex.test(formData.lastName.trim())
    ) {
      newErrors.lastName = "Last name must contain only letters and spaces.";
    }
    if (
      !formData.cardName.trim() ||
      !nameRegex.test(formData.cardName.trim())
    ) {
      newErrors.cardName = "Name on card must contain only letters and spaces.";
    }

    // Mobile: 10–13 digits
    const mobileRegex = /^\d{10,13}$/;
    if (!formData.mobile.trim() || !mobileRegex.test(formData.mobile.trim())) {
      newErrors.mobile = "Mobile number must be 10–13 digits.";
    }

    if (
      !formData.cardMobile.trim() ||
      !mobileRegex.test(formData.cardMobile.trim())
    ) {
      newErrors.cardMobile = "Mobile number must be 10–13 digits.";
    }

    // Card number: 13–19 digits
    const cardRegex = /^\d{13,19}$/;
    if (
      !formData.cardNumber.trim() ||
      !cardRegex.test(formData.cardNumber.trim())
    ) {
      newErrors.cardNumber = "Card number must be 13–19 digits.";
    }

    // Expiry
    const currentYear = new Date().getFullYear();
    const month = parseInt(formData.expiryMonth, 10);
    const year = parseInt(formData.expiryYear, 10);

    if (!formData.expiryMonth || isNaN(month) || month < 1 || month > 12) {
      newErrors.expiryMonth = "Month must be between 1 and 12.";
    }
    if (
      !formData.expiryYear ||
      isNaN(year) ||
      year < currentYear ||
      year > currentYear + 10
    ) {
      newErrors.expiryYear = `Year must be between ${currentYear} and ${
        currentYear + 10
      }.`;
    }

    // CVV: 3–4 digits
    const cvvRegex = /^\d{3,4}$/;
    if (!formData.cvv.trim() || !cvvRegex.test(formData.cvv.trim())) {
      newErrors.cvv = "CVV must be 3 or 4 digits.";
    }

    // ZIP: 3–10 characters (alphanumeric allowed)
    if (
      !formData.zipCode.trim() ||
      formData.zipCode.trim().length < 3 ||
      formData.zipCode.trim().length > 10
    ) {
      newErrors.zipCode = "ZIP code must be 3–10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (validate()) {
      console.log("Form data: ", formData);

      setToast({
        isVisible: true,
        message: "Reserved successfully",
        status: "success",
      });
    }
  };

  const onToastClose = () => {
    setToast({
      isVisible: false,
      message: "",
      status: "",
    });
  };

  return (
    <div>
      <Nav />
      <div className="-mx-6 md:-mx-16 bg-gray-100">
        <div className="mx-10 md:mx-16">
          <h1 className="text-2xl font-semibold pt-4">
            Secure your reservation
          </h1>
          <Note />

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 py-8">
            {/* Right column (Reservation Summary) - appears first on mobile */}
            <div className="space-y-6 md:order-2">
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src={`./images/${image}`}
                  alt="Japan"
                  className="rounded-t-lg h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h4 className="font-semibold text-lg">{name}</h4>
                  <p className="flex gap-2 text-yellow-600 items-center mb-4">
                    <FaStar />
                    <span className="text-gray-600">
                      {rating} ({reviewCount} Reviews)
                    </span>
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="text-red-500">Non refundable</p>
                    <p>Check in: Sunday, March 18, 2022</p>
                    <p>Check out: Monday, March 19, 2022</p>
                    <p>2 night stay</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <div className="bg-green-300 p-4 rounded-t-lg">
                  <h2 className="font-semibold text-lg">Price details</h2>
                </div>
                <div className="p-4 border-b-1 border-gray-400">
                  <p className="flex items-center justify-between text-gray-600">
                    1 room X 2 nights <span>$ 120.32</span>
                  </p>
                  <p className="flex items-center justify-between text-gray-600">
                    Tax and service fees <span>$ 8.32</span>
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold flex justify-between items-center text-lg">
                    Total <span className="text-xl">$130</span>
                  </h4>
                  <button
                    onClick={() =>
                      setShowCouponField((showCouponField) => !showCouponField)
                    }
                    className="text-blue-600 cursor-pointer"
                  >
                    Use a coupon, credit or promotional code
                  </button>
                  {showCouponField && (
                    <div className="mt-2">
                      <h4 className="font-semibold">Coupon code</h4>
                      <div className="flex flex-col md:flex-row gap-2 mt-2">
                        <input
                          type="text"
                          name="couponCode"
                          value={formData.couponCode}
                          onChange={handleChange}
                          className="px-3 py-2 w-full md:flex-1 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                        />
                        <button className="text-white w-full md:w-auto bg-black font-medium py-2 px-3 rounded-md cursor-pointer">
                          Apply Coupon
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Left column (Personal Info + Payment + Important Info) - appears second and third on mobile */}
            <div className="space-y-6 md:order-1">
              <div className="bg-white rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center gap-2 text-white bg-blue-500 p-4 rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <FaCircleUser />
                    <h3>Room 1</h3>
                  </div>
                  <p className="text-sm opacity-90">
                    2 adults, 1 double bed and 1 twin bed, Non-smoking
                  </p>
                </div>

                <form className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-sm">{errors.mobile}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="receiveAlerts"
                      name="receiveAlerts"
                      checked={formData.receiveAlerts}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="receiveAlerts"
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      Receive text alerts about this trip.
                    </label>
                  </div>
                </form>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <div className="flex items-center gap-2 text-white bg-blue-500 p-4 rounded-t-lg">
                  <FaCreditCard />
                  <h3>Payment Options</h3>
                </div>
                <div className="flex gap-4 p-8 pt-8 pb-0 x border-b-1 border-gray-300">
                  <p className="border-b-2 border-blue-500 px-2 pb-2">
                    Debit/Credit Card
                  </p>
                  <p>Paypal</p>
                  <p>Bank transfer</p>
                </div>
                <div className="text-4xl flex gap-4 ml-8 mt-6">
                  <FaCcMastercard className="text-yellow-600 cursor-pointer" />
                  <FaCcMastercard className="text-yellow-600 cursor-pointer" />
                  <FaCcMastercard className="text-yellow-600 cursor-pointer" />
                  <FaCcMastercard className="text-yellow-600 cursor-pointer" />
                </div>
                <form className="p-6 space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name on card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                    />
                    {errors.cardName && (
                      <p className="text-red-500 text-sm">{errors.cardName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="creditCardNum"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Debit/Credit card number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.cardNumber}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="cardMobile"
                      name="cardMobile"
                      value={formData.cardMobile}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                    />
                    {errors.cardMobile && (
                      <p className="text-red-500 text-sm">
                        {errors.cardMobile}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Expiration Date
                      </label>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full">
                          <input
                            type="number"
                            id="expiryMonth"
                            name="expiryMonth"
                            value={formData.expiryMonth}
                            onChange={handleChange}
                            placeholder="Month"
                            className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                          />
                          {errors.expiryMonth && (
                            <p className="text-red-500 text-sm">
                              {errors.expiryMonth}
                            </p>
                          )}
                        </div>
                        <div className="w-full">
                          <input
                            type="number"
                            id="expiryYear"
                            name="expiryYear"
                            value={formData.expiryYear}
                            onChange={handleChange}
                            placeholder="Year"
                            className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                          />
                          {errors.expiryYear && (
                            <p className="text-red-500 text-sm">
                              {errors.expiryYear}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="sCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Security Code
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                      />
                      {errors.cvv && (
                        <p className="text-red-500 text-sm">{errors.cvv}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Billing zip code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                      />
                      {errors.zipCode && (
                        <p className="text-red-500 text-sm">{errors.zipCode}</p>
                      )}
                    </div>
                  </div>
                </form>
              </div>

              {/* Important Information Section - First on desktop, Last on mobile */}
              <div className="bg-white rounded-lg">
                <div className="bg-yellow-500 p-4 rounded-t-lg">
                  <h3 className="font-semibold text-gray-800">
                    Important information about your booking
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  <ol className="list-decimal list-inside space-y-2 text-xs leading-relaxed">
                    <li>
                      This rate is non-refundable. If you change or cancel your
                      booking you will not get a refund or credit to use for a
                      future stay.
                    </li>
                    <li>Stay extensions will require a new reservation.</li>
                    <li>Front desk staff will greet guests on arrival.</li>
                    <li>
                      No refunds will be issued for late check-in or early
                      check-out.
                    </li>
                  </ol>

                  <div className="text-xs text-gray-600 mt-3">
                    By clicking the button below, I acknowledge that I have
                    reviewed the
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-blue-700"
                    >
                      Privacy Statement
                    </a>
                    and have reviewed and accept the
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-blue-700"
                    >
                      Rules and Restrictions
                    </a>
                    and
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-blue-700"
                    >
                      Terms of Use
                    </a>
                    .
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md mt-4 transition-colors cursor-pointer"
                  >
                    Complete Booking
                  </button>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                    We use secure transmission and encrypted storage to protect
                    your personal information.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast.isVisible && (
        <Toast
          isVisible={toast.isVisible}
          onClose={onToastClose}
          message={toast.message}
          status={toast.status}
        />
      )}
    </div>
  );
};

export default Checkout;
