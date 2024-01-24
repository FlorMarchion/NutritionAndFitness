import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryGuides, getAllGuides } from "../../redux/actions/guidesActions";


export const Filters = () => {

    const [category, setCatgory] = useState('');
    const [duration, setDuration] = useState('');
    const [diet, setDiet] = useState('');
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [filteredGuides, setFilteredGuides] = useState([]);
    console.log("Guias filtradas", filteredGuides)


    const dispatch = useDispatch();
    const allGuides = useSelector((state) => state.guide.allGuides)
    console.log("Todas las guías", allGuides);


    const applyFilters = () => {
        let result = [...allGuides];

        if (diet) {
            result = result.filter((el) => el.diet === String(diet));
        }

        if (duration) {
            result = result.filter((el) => el.duration === String(duration));
        }

        // Agrega más condiciones para otros filtros (por categoría, etc.)

        setFilteredGuides(result);
    };

    // --------------- Filter by Diet -------------------

    const handleDietOption = (e) => {
        const selectedDiet = e.target.value;
        setDiet(selectedDiet);

        if (selectedDiet) {
            setIsFilterActive(true);
        } else {
            setIsFilterActive(false)
            setFilteredGuides([])
        }
    }
    // ---------------Select by Category -------------------


    // --------------- Filter by Duration -------------------

    const handleDurationOption = (e) => {
        const selectedDuration = e.target.value;
        setDuration(selectedDuration);

        if (selectedDuration) {
            setIsFilterActive(true);
        } else {
            setIsFilterActive(false)
            setFilteredGuides([])
        }
    }


    useEffect(() => {
        applyFilters();
    }, [diet, duration]);

    useEffect(() => {
        dispatch(getAllGuides())
        dispatch(getAllCategoryGuides());

    }, [])


    return (
        <div>
            <div>Filtros</div>

            {/* ------- Filter by diet ---- */}
            <div>
                <select
                    onChange={(e) => handleDietOption(e)}
                    value={diet || ""}
                >
                    <option value="" disabled>Elegir Dieta</option>
                    <option value="Variada">Variada</option>
                    <option value="Vegetariana">Vegetariana</option>
                    <option value="Celíaca">Celíaca</option>

                </select>
            </div>


            {/* ------- Filter by Duration ---- */}

            <div>
                <select
                    onChange={(e) => handleDurationOption(e)}
                    value={duration || ""}
                >
                    <option value="" disabled>Elegir Duración</option>
                    <option value="4 semanas">4 Semanas</option>
                    <option value="8 semanas">8 Semanas</option>
                </select>
            </div>

            <h2>Dietas Filtradas:</h2>
            {isFilterActive ? filteredGuides.map((guide) => (
                <div id="guides_filtered" key={guide.id}>
                    <h4>{guide.title} </h4>
                    <li> {guide.diet}</li>
                    <li>{guide.duration} </li>
                </div>
            )) : allGuides.map((guide) => (
                <div id="guides_container" key={guide.id}>{guide.title}</div>
            ))}
        </div>
    )
}