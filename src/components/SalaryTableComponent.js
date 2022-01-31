import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../components/SalaryTableComponent.css";

const SalaryTable = (props) => {
  const StaffSalary = props.staffs.map((staff) => {
    const basicSalary = 3000000;

    const overTimeSalary = 200000;

    const salary =
      staff.salaryScale * basicSalary + staff.overTime * overTimeSalary;

    return (
      <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6">
        <div>
          <div className="staff-salary-item">
            <h6 className="staff-name">{staff.name}</h6>
            <p>Mã Nhân Viên: {staff.id}</p>
            <p>Hệ Số lương: {staff.salaryScale}</p>
            <p>Giờ Làm Thêm: {staff.overTime}</p>
            <p className="salary-line">Lương: {Math.round(salary)}</p>
          </div>
        </div>
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
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Bảng Lương</h3>
          <hr />
        </div>
      </div>
      <div className="row">{StaffSalary}</div>
    </div>
  );
};

export default SalaryTable;
