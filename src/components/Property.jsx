const Property = ({ img, title, properties }) => {
  return (
    <div>
      <img src={img} alt="Property image" className="rounded" />
      <h1 className="mt-2 font-bold text-lg">{title}</h1>
      <p className="text-sm">{properties} properties</p>
    </div>
  );
};

export default Property;
