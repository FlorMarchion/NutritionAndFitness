import React from "react";
import { useDispatch } from "react-redux";
import { getGuidesByTitleOrDescription } from "../../../redux/actions/guidesActions";
import { useTranslation } from "react-i18next";

export const SearchBar = ({ setOnSearch, search, setSearch }) => {
    const [t, i18n] = useTranslation("global")

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch({
            ...search,
            keyword: e.target.value,
        });
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setOnSearch(true)
        dispatch(getGuidesByTitleOrDescription(search.keyword.normalize("NFKD").toLowerCase()));
        console.log("Ejecuto la busqueda");
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
            <button onClick={handleSearch}>{t("searchBar.search")}</button>
        </div>
    );
};