import React, { useEffect } from "react";
import "../../../styles/filters.css";
import { getGuidesFiltered } from "../../../redux/actions/guidesActions";
import { useDispatch } from "react-redux";

export const Filters = ({
    guides,
    setIsFilterActive,
    duration,
    categoryId,
    setCategoryId,
    diet,
    setDuration,
    setDiet
}) => {

    const dispatch = useDispatch();

    
   
    const handleDietOption = (e) => {
        setDiet(e.target.value);
        setIsFilterActive(true);
    }

    const handleCategoryOption = (e) => {
        setCategoryId(e.target.value);
        setIsFilterActive(true);
    }

    const handleDurationOption = (e) => {
        setDuration(e.target.value);
        setIsFilterActive(true);
    }



    useEffect(() => {
        dispatch(getGuidesFiltered(categoryId, duration, diet));
    }, [categoryId, duration, diet, dispatch]);

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
                    value={categoryId || ""}
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