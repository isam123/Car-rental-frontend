import React from 'react'


const Filter = () => {
    return (
        <div>
            <div className = "row justify-content-center w-100">
               
               <label>Filter</label>
                <div className="col-sm-2">
                <select className="browser-default custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>
<div className="col-sm-2">
<select className="browser-default custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>
<div className="col-sm-2">
<select className="browser-default custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>
              
            </div>
        </div>
    )
}

export default Filter

