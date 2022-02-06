import { Alert } from "react-bootstrap";

export const Default = () => {
  return (
    <Alert variant="success">
      <ul>
        <li>名前：</li>
        <li>性別：</li>
        <li>年齢：</li>
      </ul>
    </Alert>
  );
};
