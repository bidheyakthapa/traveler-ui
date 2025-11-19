import { Link } from "react-router-dom";

const Links = ({ data }) => {
  return (
    <div>
      <h1 className="font-bold mb-2">{data.title}</h1>
      <ul>
        {data.links.map((l) => (
          <li>
            <Link to="/" className="text-gray-700" key={l.path}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
