import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../components/RoleTableComponent.css";

const RoleTable = (props) => {
  const StaffRole = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-lg-4 col-md-6 col-sm-12">
        <div>
          <div className="role-item">
            <h5 className="role-name">{staff.name}</h5>
            <p>Số Lượng Nhân Viên: {staff.numberOfStaff}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Phòng Ban</h3>
          <hr />
        </div>
      </div>
      <div className="row">{StaffRole}</div>
    </div>
  );
};

export default RoleTable;
