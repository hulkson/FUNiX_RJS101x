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
import "../components/HomePageComponent.css";
import AddForm from "./AddForm";
import SearchForm from "./SearchForm";

function RenderStaffList({ staff, onClick }) {
  return (
    <div
      className="staff-item"
      onClick={() => {
        onClick(staff.id);
      }}
    >
      <Link to={`/home/staff_${staff.id}`}>
        <img src={staff.image} alt={staff.image} />
        <p>{staff.name}</p>
      </Link>
    </div>
  );
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.selectedDept = null;
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
      staffs: newListStaff
    });
  }

  render() {
    const staffList = JSON.parse(localStorage.getItem("staffs")).map((staff) => {
      return (
        <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6">
          <RenderStaffList staff={staff} onClick={this.props.onClick} />
        </div>
      );
    });
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
              <SearchForm staffs={this.props.staffs} setStaffs={this.handleChange} />
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
              departments={this.props.departments}
              isOpen={this.toggleModal}
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
