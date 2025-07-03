import React from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchPage = () => {
  const query = useQuery();
  const searchTerm = query.get("q");

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      {/* You can filter your data here based on `searchTerm` */}
    </div>
  );
};

export default SearchPage;
