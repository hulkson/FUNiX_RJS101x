import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import HomePage from "./HomePageComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffDetail from "./StaffDetailComponent";
import SalaryTable from "./SalaryTableComponent";
import RoleTable from "./RoleTableComponent";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      staffs: state.staffs,
      departments: state.departments,
      selectedStaff: state.selectedStaff
    }
}

class Main extends Component {

  onStaffSelect(staffId) {
    this.setState({ selectedStaff: staffId });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/home"
            component={() => (
              <HomePage
                staffs={this.props.staffs}
                onClick={(staffId) => this.onStaffSelect(staffId)}
                departments={this.props.departments}
              />
            )}
          />
          <Route
            path="/home/:staffId"
            component={() => (
              <StaffDetail staff={this.props.staffs.filter(staff => staff.id === this.state.selectedStaff)[0]}
              />
            )}
          />
          <Route
            path="/salary-table"
            component={() => <SalaryTable staffs={this.props.staffs} />}
          />
          <Route
            path="/role-table"
            component={() => <RoleTable staffs={this.props.departments} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
