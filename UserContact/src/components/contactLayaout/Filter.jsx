import React from "react";

const Filter = ({ onSort, sortOption = "default" }) => {
  const handleSortChange = (e) => {
    const value = e.target.value;
    if (onSort) {
      onSort(value);
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between p-3">
        <div className="fs-2">
          <i className="fa fa-filter text-success"></i> Filter
        </div>
        <select 
          className="form-select w-auto" 
          aria-label="Sort contacts"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="default">Default Order</option>
          <option value="firstNameAsc">First Name (A → Z)</option>
          <option value="lastNameAsc">Last Name (A → Z)</option>
          <option value="oldest">Oldest To Newest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;