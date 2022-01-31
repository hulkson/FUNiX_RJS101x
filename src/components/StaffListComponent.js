import React, { Component } from "react";
import { Table } from "reactstrap";
import dateFormat from "dateformat";

import "../components/StaffListComponent.css";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
    };
  }

  staffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaff(staff) {
    if (staff != null) {
      return (
        <div className="tableContainer col-lg-12 col-md-12 col-sm-12">
          <div>
          <h5>ID</h5>
          <p>{staff.id}</p>
          </div>

          <div>
          <h5>Name</h5>
          <p>{staff.name}</p>
          </div>

          <div>
          <h5>Birthday</h5>
          <p>{dateFormat(staff.doB, "dd/mm/yyyy")}</p>
          </div>

          <div>
          <h5>Start Date</h5>
          <p>{dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
          </div>

          <div>
          <h5>Workplace</h5>
          <p>{staff.department.id}</p>
          </div>

          <div>
          <h5>Annual Leave Left</h5>
          <p>{staff.annualLeave}</p>
          </div>

          <div>
          <h5>Overtime working day</h5>
          <p>{staff.overTime}</p>
          </div>
        </div>
      );
    } else return <div></div>;
  }

  render() {
    const staffList = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-lg-2 col-md-4 col-sm-12">
          <Table
            onClick={() => {
              this.staffSelect(staff);
            }}
          >
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
      );
    });

    return (
      <div className="container">
        <div className="row">{staffList}</div>
        <div className="row">{this.renderStaff(this.state.selectedStaff)}</div>
      </div>
    );
  }
}

export default StaffList;
