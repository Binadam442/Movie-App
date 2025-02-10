import React from "react";

const Search = ({ SearchTerm, setSearchTerm }) => {
    return (
        <div className="search">
            <div>
            <img src="search.png" alt="search" />
                <input 
                type="text"
                placeholder="Search thousands Movies"
                value={SearchTerm}
                onChange={(event) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search