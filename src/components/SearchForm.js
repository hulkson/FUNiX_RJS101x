import React from "react";
import { Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

const SearchForm = (props) => {
  const handleSearch = (values) => {
    console.log(values.searchText);
    let filteredArray;
    if (values.searchText === "" || values.searchText === undefined) {
      filteredArray = props.staffs;
      
    } else {
      filteredArray = props.staffs.filter((staff) =>
        staff.name.toLowerCase().includes(values.searchText)
      );
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
