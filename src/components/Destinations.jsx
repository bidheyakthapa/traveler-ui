import Property from "./Property";

const data = [
  {
    id: 1,
    img: "./images/aus.jpg",
    title: "Australia",
    properties: 2246,
  },
  {
    id: 2,
    img: "./images/japan.jpg",
    title: "Japan",
    properties: 1278,
  },
  {
    id: 3,
    img: "./images/aus.jpg",
    title: "New Zealand",
    properties: 480,
  },
  {
    id: 4,
    img: "./images/japan.jpg",
    title: "Greece",
    properties: 320,
  },
];

const Destinations = () => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold my-4">Enjoy your dream vacation</h1>
      <p className="max-w-1/2 text-sm">
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
      <div className="flex gap-4 mt-6">
        {data &&
          data.map((i) => (
            <Property img={i.img} title={i.title} properties={i.properties} />
          ))}
      </div>
    </div>
  );
};

export default Destinations;
