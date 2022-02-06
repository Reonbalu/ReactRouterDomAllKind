import React from "react";
import { Alert } from "react-bootstrap";

export const Tanaka: React.VFC = () => {
  return (
    <Alert variant="success">
      <ul>
        <li>名前：田中花子</li>
        <li>性別：女</li>
        <li>年齢：20歳</li>
      </ul>
    </Alert>
  );
};
