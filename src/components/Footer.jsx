import { BiSolidPlaneAlt } from "react-icons/bi";
import Links from "./Links";

const data = [
  {
    title: "Test",
    links: [
      { label: "Link", path: "/home" },
      { label: "Links", path: "/next" },
    ],
  },
  {
    title: "Test1",
    links: [
      { label: "Link", path: "/home" },
      { label: "Links", path: "/next" },
    ],
  },
  {
    title: "Test2",
    links: [
      { label: "Link", path: "/home" },
      { label: "Links", path: "/next" },
    ],
  },
  {
    title: "Test3",
    links: [
      { label: "Link", path: "/home" },
      { label: "Links", path: "/next" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row justify-between  bottom-0">
      <div>
        <div className="flex items-center font-semibold text-lg">
          <BiSolidPlaneAlt className="text-blue-500" />
          <h1>myDreamPlace</h1>
        </div>
        <p className="ml-5 text-sm w-3/4 text-gray-700">
          Your next goto companion for travel
        </p>
      </div>
      {data.map((d) => (
        <Links data={d} />
      ))}
    </div>
  );
};

export default Footer;
