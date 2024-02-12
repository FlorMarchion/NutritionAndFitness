import React, { useEffect, useState } from "react";
import { Filters } from "../../guidesComponents/Filters.jsx";
import { SearchBar } from "../../guidesComponents/SearchBar.jsx";
import { Guide } from "./Guide.jsx";
import { getAllCategoryGuides, getAllGuides } from "../../../redux/actions/guidesActions.js";
import { useDispatch, useSelector } from "react-redux";
import { OrderGuides } from "../../guidesComponents/OrderGuides.jsx";
import { GuideDetails } from "./GuideDetails.jsx";

export const Guides = () => {
  const dispatch = useDispatch();
  const allGuides = useSelector((state) => state.guide.allGuides)
  const guidesByTitles = useSelector((state) => state.guide.allGuidesByTitleOrDescription);

  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [diet, setDiet] = useState('');

  const [isFilterActive, setIsFilterActive] = useState(false);
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [guides, setGuides] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]); //guias por titulo y descripcion

  const [orderOptions, setOrderOptions] = useState(false);
  const [orderedGuides, setOrderedGuides] = useState([]);

  const [detailsVisible, setDetailsVisible] = useState(false); //Cuando clickeo la card
  const [selectedGuide, setSelectedGuide] = useState(null);




  const applyFilters = () => {
    let result = [...allGuides];

    if (diet) {
      result = result.filter((el) => el.diet === String(diet));
    }
    if (category) {
      result = result.filter((el) => el.categoryGuide.name === String(category));
    }
    if (duration) {
      result = result.filter((el) => el.duration === String(duration));
    }

    setFilteredGuides(result);
  };

  useEffect(() => {
    applyFilters();
  }, [diet, duration, category]);

  useEffect(() => {
    dispatch(getAllGuides())
    dispatch(getAllCategoryGuides());
    setGuides(allGuides);
  }, [])

  useEffect(() => {
    setSearchResults(guidesByTitles);
  }, [guidesByTitles]);

  useEffect(() => {
    if (orderOptions === true) {
      setGuides(orderedGuides);
    } else {
      setGuides(allGuides);
    }
  }, [orderOptions, orderedGuides, allGuides]);

  return (
    <div>
      <SearchBar
        setShowResults={setShowResults}
      />
      <Filters
        guides={guides}
        setIsFilterActive={setIsFilterActive}
        setFilteredGuides={setFilteredGuides}
        category={category}
        setCategory={setCategory}
        duration={duration}
        setDuration={setDuration}
        diet={diet}
        setDiet={setDiet}
      />
      <OrderGuides
        allGuides={allGuides}
        setOrderedGuides={setOrderedGuides}
        setOrderOptions={setOrderOptions}
      />
      <div className="containerCards" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {isFilterActive && detailsVisible ? filteredGuides.map((guide) => (
          <div id="guides_filtered" key={guide.id}>
            <Guide
              key={guide.id}
              title={guide.title}
              image={guide.image}
              description={guide.description}
              diet={guide.diet}
              duration={guide.duration}
              categoryGuide={guide.categoryGuide}
              price={guide.price}
              setDetailsVisible={() => {
                setSelectedGuide(guide);  // Guarda la guía seleccionada
                setDetailsVisible(true)
              }}
            />
          </div>
        )) : showResults ? (
          <>
            {showResults && detailsVisible && searchResults && searchResults.length > 0 && (
              <div>
                <h2>Guías encontradas:</h2>
                <ul>
                  {searchResults.map((guide) => (
                    <Guide
                      key={guide.id}
                      title={guide.title}
                      image={guide.image}
                      description={guide.description}
                      diet={guide.diet}
                      duration={guide.duration}
                      categoryGuide={guide.categoryGuide}
                      price={guide.price}
                      setDetailsVisible={() => {
                        setSelectedGuide(guide);  // Guarda la guía seleccionada
                        setDetailsVisible(true)
                      }}
                    />
                  ))}
                </ul>
              </div>
            )}

            {!showResults && (
              <div>
                <p>No se encontraron guías con ese criterio.</p>
              </div>

            )}
          </>
        ) : (orderOptions ? orderedGuides.map((guide) => (
          <div id="guides_container" key={guide.id}>
            <Guide
              key={guide.id}
              title={guide.title}
              image={guide.image}
              description={guide.description}
              diet={guide.diet}
              duration={guide.duration}
              categoryGuide={guide.categoryGuide}
              price={guide.price}
              setDetailsVisible={() => {
                setSelectedGuide(guide);  // Guarda la guía seleccionada
                setDetailsVisible(true)
              }}
            />
          </div>
        )) : allGuides.map((guide) => (
          <div id="guides_container" key={guide.id}>
            <Guide
              key={guide.id}
              title={guide.title}
              image={guide.image}
              description={guide.description}
              diet={guide.diet}
              duration={guide.duration}
              categoryGuide={guide.categoryGuide}
              price={guide.price}
              setDetailsVisible={() => {
                setSelectedGuide(guide);  // Guarda la guía seleccionada
                setDetailsVisible(true);
              }}
            />
          </div>
        )))}
      </div>
      {/* Mostrar el detalle de la guía si selectedGuide y detailsVisible son true */}
      {selectedGuide && detailsVisible && (
        <GuideDetails
          isOpen={detailsVisible}
          onRequestClose={() => setDetailsVisible(false)}
        // ... otras props para el detalle de la guía
        />
      )}
    </div>
  );
};
