import React, { useEffect, useState } from "react";
import { Filters } from "../../guidesComponents/Filters.jsx";
import { SearchBar } from "../../guidesComponents/SearchBar.jsx";

export const Guides = () => {

  return (
    <div>
      <SearchBar />
      <Filters />
    </div>
  );
};
