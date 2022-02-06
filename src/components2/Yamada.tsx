import { Alert } from "react-bootstrap";
// react-router-domライブラリから、Outletをimportする
import { Outlet } from "react-router-dom";

export const Yamada = () => {
  return (
    <Alert variant="success">
      <ul>
        <li>名前：山田太郎</li>
        <li>性別：男</li>
        <li>年齢：25歳</li>
      </ul>
    </Alert>
  );
};
