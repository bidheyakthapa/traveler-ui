const Card = ({ data }) => {
  return (
    <div
      className="relative bg-cover bg-center h-60 flex flex-col justify-end mt-8 rounded-lg p-4"
      style={{ backgroundImage: `url(${data.img})` }}
    >
      <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
      <div className="relative text-white z-10 cursor-pointer">
        <h1 className="font-semibold line-clamp-2 overflow-hidden text-ellipsis">
          {data.title}
        </h1>
        <p className="font-normal text-sm line-clamp-2 overflow-hidden text-ellipsis">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
