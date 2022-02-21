import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomePage from "./HomePageComponent";
import StaffDetail from "./StaffDetailComponent";
import RoleTable from "./RoleTableComponent";
import RoleTableDetail from "./RoleTableDetailComponent";
import SalaryTable from "./SalaryTableComponent";
import { connect } from "react-redux";
import {
  postStaff,
  delStaff,
  fetchStaffs,
  fetchDepts,
  fetchSalary,
} from "../redux/actions/ActionCreators";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    selectedStaff: state.selectedStaff,
    selectedDept: state.selectedDept,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postStaff: (name, doB, startDate, departmentId, salaryScale, annualLeave, overTime) =>
    dispatch(
      postStaff(name, doB, startDate, departmentId, salaryScale, annualLeave, overTime)
    ),

  delStaff: (staffId) => dispatch(delStaff(staffId)),

  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },

  fetchDepts: () => {
    dispatch(fetchDepts());
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
});

class Main extends Component {
  onStaffSelect(staffId) {
    this.setState({ selectedStaff: staffId });
  }

  onDeptSelect(deptId) {
    this.setState({ selectedDept: deptId });
  }

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepts();
    this.props.fetchSalary();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/staffs"
            component={() => (
              <HomePage
                staffs={this.props.staffs.staffs}
                staffsLoading={this.props.staffs.isLoading}
                staffsErrorMess={this.props.staffs.errorMess}
                onClick={(staffId) => {
                  this.onStaffSelect(staffId)
                }}
                departments={this.props.departments}
                postStaff={this.props.postStaff}
                delStaff={this.props.delStaff}
              />
            )}
          />
          <Route
            path="/staffs/:staffId"
            component={() => (
              <StaffDetail
                departments={this.props.departments.depts}
                staff={
                  this.props.staffs.staffs.filter(
                    (staff) => staff.id === this.state.selectedStaff
                  )[0]
                }
              />
            )}
          />

          <Route
            path="/staffsSalary"
            component={() => <SalaryTable staffs={this.props.staffs.staffs} />}
          />

          <Route
            path="/departments/:deptId"
            component={() => (
              <RoleTableDetail
                staffs={
                  this.props.staffs.staffs.filter(
                    (staff) => staff.departmentId === this.state.selectedDept
                  )
                }
                onClick={(staffId) => this.onStaffSelect(staffId)}
              />
            )}
          />

          <Route
            path="/departments"
            component={() => (
              <RoleTable
                depts={this.props.departments}
                onClick={(deptId) => this.onDeptSelect(deptId)}
              />
            )}
          />

          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
