import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryGuides, getAllGuides } from "../../redux/actions/guidesActions";
import { Guide } from "../NavBar/items/Guide";
import "./../../styles/filters.css";

export const Filters = ({
    guides,
    setIsFilterActive,
    setFilteredGuides,
    category,
    setCategory,
    duration,
    setDuration,
    diet,
    setDiet
}) => {

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
    const handleCategoryOption = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        if (selectedCategory) {
            setIsFilterActive(true);
        } else {
            setIsFilterActive(false)
            setFilteredGuides([])
        }
    }

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

    const applyFilters = () => {
        let result = [...guides];
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

            {/* ------- Filter by Category ---- */}
            <div>
                <select
                    onChange={(e) => handleCategoryOption(e)}
                    value={category || ""}
                >
                    <option value="" disabled>Elegir Categoría</option>
                    <option value="Masa Muscular">Masa Muscular</option>
                    <option value="Definición">Definición</option>
                    <option value="Más Energía">Más Energía</option>
                    <option value="Tren Inferior">Tren Inferior</option>
                    <option value="Cuerpo Completo">Cuerpo Completo</option>

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
            <h2>Guías Filtradas:</h2>
        </div>
    )
}