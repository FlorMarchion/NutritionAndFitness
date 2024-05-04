import React, { useState } from "react";
import "../../../styles/filters.css";

export const Filters = ({
    diet,
    categoryId,
    duration,
    setFilterState
}) => {

    const handleDietOption = (e) => {
        // setDiet(e.target.value);
        setFilterState((prevState) => ({
            ...prevState,
            diet: e.target.value,
        }));
    }

    const handleCategoryOption = (e) => {
        // setCategoryId(e.target.value);
        setFilterState((prevState) => ({
            ...prevState,
            categoryId: e.target.value,
        }));
        // setIsFilterActive(false);
    }

    const handleDurationOption = (e) => {
        setFilterState((prevState) => ({
            ...prevState,
            duration: e.target.value,
        }));
        // setIsFilterActive(false);

    }


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
                    <option value="1">Cuerpo Completo</option>
                    <option value="2">Masa Muscular</option>
                    <option value="3">Definición</option>
                    <option value="4">Más Energía</option>
                    <option value="5">Entrenamiento</option>
                    <option value="6">Tren Inferior</option>

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