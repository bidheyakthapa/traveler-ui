import Card from "./Card";

const data = [
  {
    title: "Test title",
    desc: "This is a test description for the blog section",
    img: "/images/aus.jpg",
  },
  {
    title: "Test title",
    desc: "This is a test description for the blog section",
    img: "/images/japan.jpg",
  },
  {
    title: "Test title",
    desc: "Browse the fastest growing tourism sector in the heart of Australia tourism capital Browse the fastest growing tourism sector in the heart of Australia tourism capital",
    img: "/images/aus.jpg",
  },
];

const Blog = () => {
  return (
    <div className="mt-8 font-bold text-2xl">
      <h1>Get inspiration for your next trip</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((d) => (
          <Card data={d} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
