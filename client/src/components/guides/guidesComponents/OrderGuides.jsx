import React from "react";


export const OrderGuides = ({ allGuides, setOrderedGuides, setOrderOptions }) => {

    const handleOrderOption = (e) => {
        console.log({ value: e.target.value });
        const selectOption = e.target.value;
        let result = [...allGuides];

        switch (selectOption) {
            case 'mayor precio':
                result = result.sort((a, b) => b.price - a.price);
                break;

            case "menor precio":
                result = result.sort((a, b) => a.price - b.price);
                break;

            case "A-Z":
                result = result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Z-A":
                result = result.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "mas recientes":
                result = result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            case "mas antiguas":
                result = result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                break

            // Falta ordenamiento por "mas populares",
            // Falta ordenamiento por "mejor puntuadas",

            default:
                // Lógica por defecto si no coincide con ninguna opción
                return result;
        }
        // console.log({ result });
        // console.log(result.map(el => {console.log("Final",el.createdAt);}));
        setOrderedGuides(result)
        setOrderOptions(true);
        return result;
        // Puedes enviar el resultado ordenado al estado global si es necesario
        // dispatch(setOrderedGuide(result));
    };

    return (
        <div>
            <select onChange={(e) => handleOrderOption(e)}>
                <option value="" disabled>Ordenar por</option>
                <option value="todas las guias">Todas las guías</option>
                <option value="mas recientes">Más recientes</option>
                <option value="mas antiguas">Más antiguas</option>
                <option value="mas populares">Más populares</option>
                <option value="mas recientes">Más recientes</option>
                <option value="mejor puntuadas">Mejor puntuadas</option>
                <option value="menor precio">Menor precio</option>
                <option value="mayor precio">Mayor precio</option>
                <option value="A-Z">Afabético A-Z</option>
                <option value="Z-A">Alfabético Z-A</option>
            </select>
        </div>
    );
};
