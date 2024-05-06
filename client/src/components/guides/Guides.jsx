import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Guide } from "./Guide.jsx";
import { getAllGuides, getGuidesFiltered } from "./../../redux/actions/guidesActions.js"
import { Filters } from "./guidesComponents/Filters.jsx";
import { OrderGuides } from "./guidesComponents/OrderGuides.jsx";
import { SearchBar } from "./guidesComponents/SearchBar.jsx";

export const Guides = () => {
  const dispatch = useDispatch();
  const guides = useSelector((state) => state.guide.allGuides);
  const guidesByTitle = useSelector((state) => state.guide.allGuidesByTitleOrDescription);


  const [categoryId, setCategoryId] = useState('');
  const [duration, setDuration] = useState('');
  const [diet, setDiet] = useState('');
  const [search, setSearch] = useState({ keyword: "" });
  const [onSearch, setOnSearch] = useState(false);
  const [isOrderActive, selectOrderActive] = useState(false)
  const [filterState, setFilterState] = useState({
    diet: null,
    categoryId: null,
    duration: null,
    order: null,
    take: 10,
    page: 0,
  })


  useEffect(() => {
    if (isOrderActive) {
      dispatch(getAllGuides());
    }
    if (filterState) {
      dispatch(getGuidesFiltered(filterState))
    } if (onSearch === true) {
      console.log('Valor de onSearch', onSearch);
    }
  }, [filterState, guidesByTitle]);

  return (
    <div>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setOnSearch={setOnSearch}
      />
      <OrderGuides
        selectOrderActive={selectOrderActive}
        filterState={filterState}
        setFilterState={setFilterState}
      />
      <Filters
        diet={setDiet}
        categoryId={setCategoryId}
        duration={setDuration}
        filterState={filterState}
        setFilterState={setFilterState}
      />
      <Guide
        guides={guides}
      // guides={filterState ? guidesFiltered : guides}
      />
    </div>
  )
}