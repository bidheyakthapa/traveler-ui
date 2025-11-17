const Download = () => {
  return (
    <div className="relative bg-[url('./images/bgDownload.jpg')] bg-center bg-cover mt-8 flex justify-evenly items-center rounded-lg px-20">
      <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
      <div className="realtive z-10 py-16">
        <h1 className="text-white text-2xl w-2/3">
          Download the mobile application for bonus coupons and travel codes
        </h1>
        <button className="text-white bg-blue-500 cursor-pointer px-4 py-2 rounded mt-8">
          Download mobile app
        </button>
      </div>
      <div className="z-10">
        <img src="./images/right.png" alt="Mobile" className="h-70" />
      </div>
    </div>
  );
};

export default Download;
