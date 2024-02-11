import React, { SyntheticEvent } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { LoginComponent } from "../login-component/LoginComponent";
import { Button } from "reactstrap";

export const ViewReimbursementsButtonComponent = (props: any) => {
  // const gotoLogin = () => {
  // let path = "/login";
  // let history = useHistory();
  // history.push(path);
  // };

  return (
    <Button
      className="profile-buttons"
      path={"/reimbursements/all-user-reimbursements"}
      onClick={() => {
        props.history.push("/reimbursements/all-user-reimbursements");
      }}
    >
      View My Reimbursements
    </Button>
  );
};

export default ViewReimbursementsButtonComponent;
