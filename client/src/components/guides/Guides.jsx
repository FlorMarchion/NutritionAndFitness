import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Guide } from "./Guide.jsx";
import {getAllGuides} from "./../../redux/actions/guidesActions.js"


export const Guides = () => {
  const dispatch = useDispatch();
  const guides = useSelector((state) => state.guide.allGuides);
  const categories = useSelector((state) => state.guide.allCategories)
  if(guides.length > 0) {
  console.log("Categories",categories);
  }
  
  useEffect(() => {
    dispatch(getAllGuides())
  }, [])

  return (
    <div>
      <Guide
      guides={guides}
      />
    </div>
  )

  //   const applyFilters = () => {
  //     let result = [...allGuides];

  //     if (diet) {
  //       result = result.filter((el) => el.diet === String(diet));
  //     }
  //     if (categoryId) {
  //       result = result.filter((el) => el.categoryGuide.name === String(categoryId));
  //     }
  //     if (duration) {
  //       result = result.filter((el) => el.duration === String(duration));
  //     }

  //     setFilteredGuides(result);
  //     console.log("Resultado de Guides", result);
  //     console.log("Guías Filtradas:", filteredGuides);

  //   };

  //   useEffect(() => {
  //     applyFilters();
  //   }, [diet, duration, categoryId]);

  //   useEffect(() => {
  //     dispatch(getAllGuides())
  //     dispatch(getAllCategoryGuides());
  //     setGuides(allGuides);
  //   }, [])

  //   useEffect(() => {
  //     setSearchResults(guidesByTitles);
  //   }, [guidesByTitles]);

  //   useEffect(() => {
  //     if (orderOptions === true) {
  //       setGuides(orderedGuides);
  //     } else {
  //       setGuides(allGuides);
  //     }
  //   }, [orderOptions, orderedGuides, allGuides]);

  //   return  (
  //     <div>
  //       <Filters
  //         guides={guides}
  //         setIsFilterActive={setIsFilterActive}
  //         setFilteredGuides={setFilteredGuides}
  //         categoryId={categoryId}
  //         setCategoryId={setCategoryId}
  //         duration={duration}
  //         setDuration={setDuration}
  //         diet={diet}
  //         setDiet={setDiet}
  //       />

  //       <div className="containerCards" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
  //         {isFilterActive ? filteredGuides.map((guide) => (
  //           <div id="guides_filtered" key={guide.id}>
  //             <Guide
  //               key={guide.id}
  //               title={guide.title}
  //               image={guide.image}
  //               description={guide.description}
  //               diet={guide.diet}
  //               duration={guide.duration}
  //               categoryGuide={guide.categoryGuide}
  //               price={guide.price}
  //             />
  //           </div>
  //         )) : null}
  //       </div>
  //     </div>
  //   );
}