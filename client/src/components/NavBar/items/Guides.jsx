import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllGuides,
  getAllCategoryGuides,
} from "../../../redux/actions/guidesActions.js";
import { Guide } from "./Guide.jsx";

export const Guides = () => {
  const dispatch = useDispatch();
  const allGuides = useSelector((state) => state.guide.allGuides);
  const allCategoryGuides = useSelector((state) => state.guide.allCategories);
  console.log("Todas las guías", allGuides);
  console.log("Todas las categorías de guías", allCategoryGuides)

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const guidesByCategoryId = (categoryId) => {
    const filtered = allCategoryGuides.filter(
      (catGuide) => catGuide.id === Number(categoryId)
    );
    setFilteredGuides(filtered);
  };

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    if (categoryId) {
      setIsFilterActive(true);
      guidesByCategoryId(categoryId);
    } else {
      setIsFilterActive(false);
      setFilteredGuides([]);
    }
  };

  useEffect(() => {
    dispatch(getAllGuides());
    dispatch(getAllCategoryGuides());
  }, []);

  return (
    <div>
      <select
        onChange={(e) => handleCategoryChange(e)}
        value={selectedCategory || ""}
      >
        <option value="">All guides</option>
        {allCategoryGuides.map((catGuide) => (
          <option key={catGuide.id} value={catGuide.id}>
            {catGuide.name}
          </option>
        ))}
      </select>
      <h1>Guías</h1>
      {isFilterActive
        ? filteredGuides[0].guides.map((guide) => (
          <div id="guides_container_filtered" key={guide.id}>
            <Guide
              key={guide.id}
              title={guide.title}
              description={guide.description}
            />
          </div>
        ))
        : allGuides.map((guide) => (
          <div id="guides_container" key={guide.id}>
            <div>
              <Guide
                key={guide.id}
                title={guide.title}
                description={guide.description}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
