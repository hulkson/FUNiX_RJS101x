import React from "react";
import dateFormat from "dateformat";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../components/StaffDetailComponent.css";

function RenderStaff({ staff }) {
  return (
    <div className="staff-detail__item">
      <div className="staff-avatar">
        <img src={staff.image} alt={staff.image} />
      </div>
      <div className="staff-content">
        <h5>Họ Và Tên: {staff.name}</h5>
        <p>Ngày Sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
        <p>Ngày Vào Công Ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
        <p>Phòng Ban: {staff.department.name}</p>
        <p>Số ngày nghĩ còn lại: {staff.annualLeave}</p>
        <p>Số ngày đã làm thêm: {staff.overTime}</p>
      </div>
    </div>
  );
}

const StaffDetail = (props) => {
  if (props.staff != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.staff.name}</h3>
            <hr />
          </div>
        </div>
        <div>
          <RenderStaff staff={props.staff} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default StaffDetail;
