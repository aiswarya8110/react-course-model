import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "../utils/appSlice";
const Search = ()=>{
    const searchInputRef = useRef();
    const dispatch = useDispatch();
    const handleClick = (e)=>{
        e.preventDefault();
        const searchTerm = searchInputRef.current.value;
        dispatch(updateSearchTerm(searchTerm));
    }
    return (
        <div>
            <form>
                <input type="text" ref={searchInputRef} className="border border-black"/>
                <button onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}

export default Search;