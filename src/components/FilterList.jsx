const FilterList = ({ title, data, onFilterChange }) => {
  return (
    <div className="border border-gray-300 rounded w-60 my-4">
      <h1 className="border-b border-gray-300 p-2 bg-gray-100 font-medium">
        {title}
      </h1>
      {data.map((d) => (
        <div key={d.id} className="flex p-2 items-center gap-2">
          <input
            type="checkbox"
            id={d.id}
            onChange={(e) => onFilterChange(d.id, e.target.checked)}
          />
          <label
            htmlFor={d.id}
            className="flex-1 flex justify-between items-center cursor-pointer"
          >
            {d.name}
            <span className="text-gray-600 text-sm text-right">
              {d.matches}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterList;
