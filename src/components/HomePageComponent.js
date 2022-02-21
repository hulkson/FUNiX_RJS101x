import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";
import SearchForm from "./SearchForm";
import { Loading } from "./LoadingComponent";
import { FadeTransform } from "react-animation-components";
import "../components/HomePageComponent.css";

function RenderStaffList({ staff, onClick, delStaff }) {
  return (
    <FadeTransform
      in
      transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
    >
      <div
        className="staff-item"
        key={staff.id}
        onClick={() => {
          onClick(staff.id);
        }}
      >
        <Link to={`/staffs/staff_${staff.id}`}>
          <img src={staff.image} alt={staff.image} />
          <p>{staff.name}</p>
        </Link>
        <Button
          className="del-staff-btn"
          color="danger"
          onClick={() => {
            delStaff(staff.id);
          }}
        >
          Xóa Nhân Viên
        </Button>
      </div>
    </FadeTransform>
  );
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleChange(newListStaff) {
    this.setState({
      staffs: newListStaff,
    });
  }

  render() {
    const staffList = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6">
          <RenderStaffList
            isLoading={this.props.staffsLoading}
            errorMess={this.props.staffsErrorMess}
            staff={staff}
            onClick={this.props.onClick}
            delStaff={this.props.delStaff}
          />
        </div>
      );
    });

    if (this.props.staffsLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.staffsErrorMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.errorMess}</h4>
          </div>
        </div>
      );
    } else
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12 header-function">
              <h3>Homepage</h3>
              <div className="header-right-box">
                <Button
                  className="fa fa-plus fa-lg"
                  onClick={this.toggleModal}
                ></Button>
                <SearchForm
                  staffs={this.props.staffs}
                  setStaffs={this.handleChange}
                />
              </div>
            </div>
          </div>

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
              Thêm Nhân Viên Mới
            </ModalHeader>
            <ModalBody>
              <AddForm
                staffs={this.props.staffs}
                departments={this.props.departments.staffs}
                isOpen={this.toggleModal}
                postStaff={this.props.postStaff}
              />
            </ModalBody>
          </Modal>

          <hr />
          <div className="row">{staffList}</div>
        </div>
      );
  }
}

export default HomePage;
