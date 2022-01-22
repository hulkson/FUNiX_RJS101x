import React, { Component } from 'react';
import { Table } from 'reactstrap';
import dateFormat from 'dateformat'; 

import '../components/StaffListComponent.css';

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null
    }
  }

  staffSelect(staff) {
    this.setState({selectedStaff: staff});
  }

  renderStaff(staff) {
    if (staff != null) {
      return (
        <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Staff Name</th>
            <th>Staff Birthday</th>
            <th>Start Date</th>
            <th>Workplace</th>
            <th>Position</th>
            <th>Annual Leave Left</th>
            <th>Overtime working day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{staff.id}</td>
            <td>{staff.name}</td>
            <td>{dateFormat(staff.doB, "dd/mm/yyyy")}</td>
            <td>{dateFormat(staff.startDate, "dd/mm/yyyy")}</td>
            <td>{staff.department.id}</td>
            <td>{staff.department.name}</td>
            <td>{staff.annualLeave}</td>
            <td>{staff.overTime}</td>
          </tr>
        </tbody>
      </Table>
      )
    }
    else return <div></div>
  }

  render() {
    const staffList = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-lg-2 col-md-4 col-sm-12">
          <Table onClick={() => {this.staffSelect(staff)}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Staff Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{staff.id}</td>
            <td>{staff.name}</td>
          </tr>
        </tbody>
      </Table>
        </div>
      )
    })

    return (
      <div className="container">
        <div className="row">
            {staffList}
        </div>
        <div className="row">
          {this.renderStaff(this.state.selectedStaff)}
        </div>
      </div>
    )
  }
}

export default StaffList;