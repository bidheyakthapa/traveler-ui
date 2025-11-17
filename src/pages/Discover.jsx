import propertyData from "../property.json";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Note from "../components/Note";
import ItemCard from "../components/ItemCard";
import FilterList from "../components/FilterList";
import RatingFilter from "../components/RatingFilter";
import { useState } from "react";

const popularFilterList = [
  { id: "free-cancellation", name: "Free cancellation", matches: "100" },
  { id: "spa", name: "Spa", matches: "15" },
  { id: "beach", name: "Beach", matches: "10" },
  { id: "no-prepayment", name: "No prepayment", matches: "12" },
];

const budgetFilterList = [
  { id: "0-200", name: "$0-$200", matches: "100" },
  { id: "200-500", name: "$200-$500", matches: "15" },
  { id: "500-1000", name: "$500-$1000", matches: "10" },
  { id: "1000-2000", name: "$1000-$2000", matches: "12" },
];

const activitiesFilterList = [
  { id: "fishing", name: "Fishing", matches: "10" },
  { id: "hiking", name: "Hiking", matches: "10" },
  { id: "beach", name: "Beach", matches: "10" },
  { id: "sauna", name: "Sauna", matches: "10" },
];

const Discover = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    popular: [],
    budget: [],
    activity: [],
    rating: null,
  });

  const handleFilterChange = (category, filterId, isChecked) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (category === "rating") {
        newFilters.rating = filterId;
      } else if (isChecked) {
        newFilters[category] = [...newFilters[category], filterId];
      } else {
        newFilters[category] = newFilters[category].filter(
          (id) => id !== filterId
        );
      }
      return newFilters;
    });
  };

  const filteredProperties = propertyData.filter((property) => {
    const matchesBudget =
      selectedFilters.budget.length === 0 ||
      selectedFilters.budget.includes(property.budgetRange);

    const matchesPopular =
      selectedFilters.popular.length === 0 ||
      selectedFilters.popular.some((filterId) =>
        property.popularFilters.includes(filterId)
      );

    const matchesActivity =
      selectedFilters.activity.length === 0 ||
      selectedFilters.activity.some((activityId) =>
        property.activities.includes(activityId)
      );

    const matchesRating =
      selectedFilters.rating === null ||
      property.rating >= selectedFilters.rating;

    return matchesBudget && matchesPopular && matchesActivity && matchesRating;
  });

  console.log(selectedFilters);

  return (
    <div>
      <Nav />
      <div className="flex gap-4 mt-16">
        <div className="">
          <h1 className="font-semibold pl-2 mb-4">Filter By</h1>
          <FilterList
            title={"Your budget per day"}
            data={budgetFilterList}
            onFilterChange={(filterId, isChecked) =>
              handleFilterChange("budget", filterId, isChecked)
            }
          />
          <RatingFilter
            onFilterChange={(filterId) =>
              handleFilterChange("rating", filterId, true)
            }
          />
          <FilterList
            title={"Popular Filters"}
            data={popularFilterList}
            onFilterChange={(filterId, isChecked) =>
              handleFilterChange("popular", filterId, isChecked)
            }
          />
          <FilterList
            title={"Activities"}
            data={activitiesFilterList}
            onFilterChange={(filterId, isChecked) =>
              handleFilterChange("activity", filterId, isChecked)
            }
          />
        </div>
        <div>
          {filteredProperties.length > 0 ? (
            filteredProperties.map((d) => <ItemCard key={d.id} data={d} />)
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
      <Note />
      <Footer />
    </div>
  );
};

export default Discover;
