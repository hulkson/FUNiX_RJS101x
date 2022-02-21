import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { FadeTransform } from "react-animation-components";
import "../components/RoleTableComponent.css";

function RenderDeptList({ dept, onClick }) {
  return (
    <FadeTransform
      in
      transformProps={{ exitTransform: "scale(0.1) translateX(-100%)" }}
    >
      <div
        className="dept-item"
        onClick={() => {
          onClick(dept.id);
        }}
      >
        <Link to={`/departments/${dept.id}`}>
          <div>
            <div className="role-item">
              <h5 className="role-name">{dept.name}</h5>
              <p>Số Lượng Nhân Viên: {dept.numberOfStaff}</p>
            </div>
          </div>
        </Link>
      </div>
    </FadeTransform>
  );
}

const RoleTable = (props) => {
  if (props.depts.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.depts.errorMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errorMess}</h4>
        </div>
      </div>
    );
  } else {
    const StaffRole = props.depts.depts.map((dept) => {
      return (
        <div key={dept.id} className="col-lg-4 col-md-6 col-sm-12">
          <RenderDeptList
            dept={dept}
            onClick={props.onClick}
            isLoading={props.staffsLoading}
            errorMess={props.staffsErrorMess}
          />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
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
  }
};

export default RoleTable;
