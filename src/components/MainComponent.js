import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePageComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffDetail from "./StaffDetailComponent";
import SalaryTable from './SalaryTableComponent';
import RoleTable from './RoleTableComponent';
import { STAFFS, DEPARTMENTS } from "../shared/staffs";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      deparments: DEPARTMENTS,
      selectedStaff: null,
    };
  }

  onStaffSelect(staffId) {
    this.setState({ selectedStaff: staffId });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={() => <HomePage staffs={this.state.staffs} onClick={(staffId) => this.onStaffSelect(staffId)} />} />
          <Route path="/home/:staffId" component={() => <StaffDetail staff={
            this.state.staffs.filter(
              (staff) => staff.id === this.state.selectedStaff
            )[0]
          } />}/>
          <Route path="/salary-table" component={() => <SalaryTable staffs={this.state.staffs} />} />
          <Route path="/role-table" component={() => <RoleTable staffs={this.state.deparments} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
