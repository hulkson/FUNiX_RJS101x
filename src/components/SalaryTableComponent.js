import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { FadeTransform } from "react-animation-components";
import "../components/SalaryTableComponent.css";

const SalaryTable = (props) => {
  if (props.staffs.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.staffs.errorMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errorMess}</h4>
        </div>
      </div>
    );
  } else {
    const StaffSalary = props.staffs.map((staff) => {
      const basicSalary = 3000000;

      const overTimeSalary = 200000;

      const salary =
        staff.salaryScale * basicSalary + staff.overTime * overTimeSalary;

      return (
        <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6">
            <FadeTransform
              in
              transformProps={{ exitTransform: "scale(0.1) translateY(-50%)" }}
            >
            <div>
              <div className="staff-salary-item">
                <h6 className="staff-name">{staff.name}</h6>
                <p>Mã Nhân Viên: {staff.id}</p>
                <p>Hệ Số lương: {staff.salaryScale}</p>
                <p>Giờ Làm Thêm: {staff.overTime}</p>
                <p className="salary-line">Lương: {Math.round(salary)}</p>
              </div>
            </div>
        </FadeTransform>
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
  }
};

export default SalaryTable;
