import React from "react";

export const SearchBar = () => {

    // const handleInputChange((e) => {})


    return (
        <>
            <input
                autoComplete="off"
                type="text"
                placeholder="Buscar guía..."
                name='name'
                // value={search.name}
                // onChange={(e) => handleInputChange(e)}
            />
        </>
    )
}