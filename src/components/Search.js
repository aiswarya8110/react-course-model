import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "../utils/appSlice";
const Search = ()=>{
    const searchInputRef = useRef();
    const dispatch = useDispatch();
    const handleClick = (e)=>{
        e.preventDefault();
        const searchTerm = searchInputRef.current.value;
        dispatch(updateSearchTerm(searchTerm.toLowerCase()));
    }
    return (
            <form className="w-full flex flex-col justify-center items-center md:flex-row">
                <input type="search" ref={searchInputRef} className="outline-none w-full mb-4 md:mb-0 md:w-2/4 border-2 border-slate-800 p-2"/>
                <button className="bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition w-full md:w-[100px]" onClick={handleClick}>Search</button>
            </form>
    )
}

export default Search;