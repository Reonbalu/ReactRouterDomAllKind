import { Alert } from "react-bootstrap";
// react-router-domライブラリから、Outletをimportする
import { Outlet } from "react-router-dom";

export const User = () => {
  return (
    <Alert variant="primay">
      <h1>user</h1>
      <Outlet />
    </Alert>
  );
};
