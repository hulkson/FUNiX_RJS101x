import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../components/RoleTableDetailComponent.css";

function RenderStaffList({ staff, onClick }) {
  return (
    <div
      className="staff-item"
      onClick={() => {
        onClick(staff.id);
      }}
    >
      <Link to={`/staffs/staff_${staff.id}`}>
        <img src={staff.image} alt={staff.image} />
        <p>{staff.name}</p>
      </Link>
    </div>
  );
}

const RoleTableDetail = (props) => {
  if (props.staffs != null) {
    const staffList = props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6">
          <RenderStaffList
            staff={staff}
            onClick={props.onClick}
          />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/departments">Back</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              {props.staffs[0].departmentId}
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <hr />
        <div className="row">{staffList}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default RoleTableDetail;
