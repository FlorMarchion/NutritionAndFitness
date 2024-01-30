import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuidesByTitle } from "../../redux/actions/guidesActions";

export const SearchBar = () => {

    const dispatch = useDispatch();
    const guidesByTitles = useSelector((state) => state.guide.allGuidesByTitle);
    console.log("guias por titulo", guidesByTitles);

    const [search, setSearch] = useState({ keyword: "" });

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch({
            ...search,
            keyword: e.target.value,
        });
    }

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getGuidesByTitle(search.keyword));
    }


    return (
        <div>
            <input
                autoComplete="off"
                type="text"
                placeholder="Buscar guía..."
                name='name'
                value={search.keyword}
                onChange={(e) => handleInputChange(e)}
            />
            <button onClick={(e) => handleSearch(e)}>Buscar</button>
        </div>
    );
};