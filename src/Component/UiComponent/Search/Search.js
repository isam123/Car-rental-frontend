import React from 'react'
import './Search.css'

const Search = () => {
    return (
    <div className="row mx-auto  w-75 justify-content-center search-background">
            <div className="col-sm-10 text-center">
                <h3 className="srch-title">Get the Best Deal of Car.</h3>
            <input className="form-control d-inline-block w-50 srch-input" />
            <button className="btn btn-md warning-color text-white d-inline">Search</button>
            </div>
        </div>
    )
}

export default Search
