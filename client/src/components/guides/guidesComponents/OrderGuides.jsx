import React from "react";


export const OrderGuides = ({ selectOrderActive, setFilterState }) => {

    const handleOrderOption = (e) => {
        console.log('Value', { value: e.target.value });
        setFilterState((prevState) => ({
            ...prevState,
            order: e.target.value,
        }));
        selectOrderActive = true
    };

    return (
        <div>
            <select onChange={(e) => handleOrderOption(e)}>
                <option value="" disabled>Ordenar por</option>
                <option value="recent">Más recientes</option>
                <option value="older">Más antiguas</option>
                <option value="minorPrice">Menor precio</option>
                <option value="higherPrice">Mayor precio</option>
                <option value="asc">Afabético A-Z</option>
                <option value="desc">Alfabético Z-A</option>
                <option value="mas populares">Más populares</option>
                <option value="mejor puntuadas">Mejor puntuadas</option>
            </select>
        </div>
    );
};
