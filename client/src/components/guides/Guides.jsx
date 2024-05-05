import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Guide } from "./Guide.jsx";
import { getAllGuides, getGuidesFiltered } from "./../../redux/actions/guidesActions.js"
import { Filters } from "./guidesComponents/Filters.jsx";

export const Guides = () => {
  const dispatch = useDispatch();
  const guides = useSelector((state) => state.guide.allGuides);
  // const categories = useSelector((state) => state.guide.allCategories)


  const [categoryId, setCategoryId] = useState('');
  const [duration, setDuration] = useState('');
  const [diet, setDiet] = useState('');
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [filterState, setFilterState] = useState({
    diet: null,
    categoryId: null,
    duration: null,
  })


  useEffect(() => {
    dispatch(getAllGuides());
    if (filterState) {
      dispatch(getGuidesFiltered(filterState))
    }
  }, [
    filterState
  ]);

  return (
    <div>
      <Filters
        diet={setDiet}
        categoryId={setCategoryId}
        duration={setDuration}
        filterState={filterState}
        setFilterState={setFilterState}
      />
      <Guide
        guides={guides}
        // guides={isFilterActive ? filteredGuides : guides}
      />
    </div>
  )


  //   useEffect(() => {
  //     if (orderOptions === true) {
  //       setGuides(orderedGuides);
  //     } else {
  //       setGuides(allGuides);
  //     }
  //   }, [orderOptions, orderedGuides, allGuides]);

}