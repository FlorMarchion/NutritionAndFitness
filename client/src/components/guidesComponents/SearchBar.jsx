import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGuidesByTitleOrDescription } from "../../redux/actions/guidesActions";

export const SearchBar = ({ setShowResults }) => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState({ keyword: "" });

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch({
            ...search,
            keyword: e.target.value,
        });
        console.log(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getGuidesByTitleOrDescription(search.keyword.normalize("NFKD").toLowerCase()));
        setShowResults(true)
    }

    return (
        <div>
            <input
                autoComplete="off"
                type="text"
                placeholder="Buscar guía..."
                name="name"
                value={search.keyword}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};