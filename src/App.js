import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponent';
import './App.css';
import { STAFFS, ROLE, DEPARTMENTS } from './shared/staffs';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      role: ROLE,
      deparment: DEPARTMENTS
    }
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng Dụng Quản Lý Nhân Sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs}/>
      </div>
    );
  }
}

export default App;