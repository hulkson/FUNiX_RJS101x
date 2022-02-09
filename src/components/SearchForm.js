import React from "react";
import { Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import { STAFFS } from "../shared/staffs";

const SearchForm = (props) => {
  const handleSearch = (values) => {
    let filteredArray;
    if (values.searchText === "" || values.searchText === undefined) {
      filteredArray = props.staffs;
      localStorage.setItem("staffs", JSON.stringify(STAFFS));
    } else {
      filteredArray = props.staffs.filter((staff) =>
        staff.name.toLowerCase().includes(values.searchText)
      );
      localStorage.setItem("staffs", JSON.stringify(filteredArray));
    }
    props.setStaffs(filteredArray);
  };

  return (
    <LocalForm onSubmit={handleSearch} className="search-form">
      <Control.text
        model=".searchText"
        id="searchText"
        name="searchText"
        placeholder="nhập tên để tìm kiếm"
        className="form-control"
      />
      <Button type="submit" color="primary">
        Tìm
      </Button>
    </LocalForm>
  );
};

export default SearchForm;
