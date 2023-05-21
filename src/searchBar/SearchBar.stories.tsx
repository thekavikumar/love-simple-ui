import React from "react";
import { SearchBar } from "./index";

export const SearchBarLight = ()=> {
    return (
        <SearchBar text="Search"></SearchBar>
    );
};
export const SearchBarDark = ()=> {
    return (
        <SearchBar text="Search" dark={true}></SearchBar>
    );
};