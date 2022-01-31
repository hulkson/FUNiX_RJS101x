import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
// import dateFormat from "dateformat";
import "../components/HomePageComponent.css";

function RenderStaffList({ staff, onClick }) {
  return (
    <div className="staff-item" onClick={() => {onClick(staff.id)}}>
      <Link to={`/home/staff_${staff.id}`}>
        <img src={staff.image} alt={staff.image} />
        <p>{staff.name}</p>
      </Link>
    </div>
  );
}

const HomePage = (props) => {
  const staffList = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6">
        <RenderStaffList staff={staff} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Homepage</h3>
          <hr />
        </div>
      </div>
      <div className="row">{staffList}</div>
    </div>
  );
};

export default HomePage;
