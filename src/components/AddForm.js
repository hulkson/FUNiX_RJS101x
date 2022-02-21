import React from "react";
import { Button, Row, Label, Col } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(val);

const AddForm = (props) => {
  const handleSubmit = (values) => {
    props.postStaff(
      values.name,
      values.doB,
      values.salaryScale,
      values.startDate,
      values.department,
      values.annualLeave,
      values.overTime,
    )
    props.isOpen();
  };
  
  return (
    <Form model='addForm' onSubmit={handleSubmit}>
      <Row className="form-group">
        <Label htmlFor="name" md={4}>
          Họ Và Tên:
        </Label>
        <Col md={8}>
          <Control.text
            model=".name"
            id="name"
            name="name"
            placeholder="Họ Và Tên"
            className="form-control"
            validators={{
              required,
              minLength: minLength(3),
              maxLength: maxLength(15),
            }}
          />
          <Errors
            className="text-danger"
            model=".name"
            show="touched"
            messages={{
              required: "must fill this line ",
              minLength: "must be greater than 2 char ",
              maxLength: "must be less than 15 char ",
            }}
          />
        </Col>
      </Row>

      <Row className="form-group">
        <Label htmlFor="doB" md={4}>
          Ngày Sinh:
        </Label>
        <Col md={8}>
          <Control
            type="date"
            model=".doB"
            id="doB"
            name="doB"
            className="form-control"
            validators={{ required }}
          />
          <Errors
            className="text-danger"
            model=".doB"
            show="touched"
            messages={{ required: "must fill this line" }}
          />
        </Col>
      </Row>

      <Row className="form-group">
        <Label htmlFor="startDate" md={4}>
          Ngày Vào Công Ty:
        </Label>
        <Col md={8}>
          <Control
            type="date"
            model=".startDate"
            id="startDate"
            name="startDate"
            className="form-control"
            validators={{ required }}
          />
          <Errors
            className="text-danger"
            model=".startDate"
            show="touched"
            messages={{ required: "must fill this line" }}
          />
        </Col>
      </Row>

      <Row className="form-group">
        <Label htmlFor="department" md={4}>
          Phòng Ban:
        </Label>
        <Col md={8}>
          <Control.select
            model=".department"
            name="department"
            id="department"
            className="form-control"
            validators={{ required }}
          >
            <option selected disabled>
              chọn phòng ban
            </option>
            <option value={"Dept01"}>Sale</option>
            <option value={"Dept02"}>HR</option>
            <option value={"Dept03"}>Marketing</option>
            <option value={"Dept04"}>IT</option>
            <option value={"Dept05"}>Finance</option>
          </Control.select>
          <Errors
            className="text-danger"
            model=".department"
            show="touched"
            messages={{ required: "must fill this line" }}
          />
        </Col>
      </Row>

      <Row className="form-group">
        <Label htmlFor="salaryScale" md={4}>
          Hệ Số Lương:
        </Label>
        <Col md={8}>
          <Control.text
            model=".salaryScale"
            id="salaryScale"
            name="salaryScale"
            placeholder="1.0 -> 3.0"
            className="form-control"
            validators={{ required, isNumber }}
          />
          <Errors
            className="text-danger"
            model=".salaryScale"
            show="touched"
            messages={{
              required: "must fill this line",
              isNumber: "invalid number",
            }}
          />
        </Col>
      </Row>

      <Row className="form-group">
        <Label htmlFor="annualLeave" md={4}>
          Số ngày nghĩ còn lại:
        </Label>
        <Col md={8}>
          <Control.text
            model=".annualLeave"
            id="annualLeave"
            name="annualLeave"
            placeholder="0.0"
            className="form-control"
            validators={{ required, isNumber }}
          />
          <Errors
            className="text-danger"
            model=".annualLeave"
            show="touched"
            messages={{
              required: "must fill this line",
              isNumber: "invalid number",
            }}
          />
        </Col>
      </Row>

      <Row className="form-group">
        <Label htmlFor="overTime" md={4}>
          Số ngày đã làm thêm:
        </Label>
        <Col md={8}>
          <Control.text
            model=".overTime"
            id="overTime"
            name="overTime"
            placeholder="0.0"
            className="form-control"
            validators={{ required, isNumber }}
          />
          <Errors
            className="text-danger"
            model=".overTime"
            show="touched"
            messages={{
              required: "must fill this line",
              isNumber: "invalid number",
            }}
          />
        </Col>
      </Row>

      <Row className="form-group">
        <Col md={{ size: 10, offset: 5 }}>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddForm;
