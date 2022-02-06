import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const HomeRedirected = () => {
  const [nameT, setNameT] = useState<String>();
  const [nameF, setNameF] = useState<String>();
  const navigate = useNavigate();

  const trueSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("nameT:", nameT);
    navigate("/redirected", { state: { name: nameT }, replace: true });
  };
  const falseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/redirected", { state: { name: nameF }, replace: false });
  };

  const trueChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameT(e.target.value);
  };

  const falseChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameF(e.target.value);
  };

  return (
    <>
      <h1>Home</h1>
      <Alert variant="variant">
        <p>replace=true</p>
        <p>(リダイレクト元の履歴が残らない)</p>
        <form onSubmit={trueSubmit}>
          <legend style={{ marginBottom: "10px" }}>
            ユーザ名
            <input
              type="text"
              style={{ marginLeft: "5px" }}
              onChange={(e) => trueChangeInput(e)}
            />
          </legend>
          <button>ログインする</button>
        </form>
      </Alert>
      <Alert variant="success">
        <p>replace=false</p>
        <p>(リダイレクト元の履歴が残る)</p>
        <form onSubmit={falseSubmit}>
          <legend style={{ marginBottom: "10px" }}>
            ユーザ名
            <input
              type="text"
              style={{ marginLeft: "5px" }}
              onChange={(e) => falseChangeInput(e)}
            />
          </legend>
          <button>ログインする</button>
        </form>
      </Alert>
    </>
  );
};
