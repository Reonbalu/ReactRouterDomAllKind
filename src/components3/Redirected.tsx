import { Link, useLocation } from "react-router-dom";

export const Redirected = (props) => {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <Link to="/rediretedhome">RedirectedHomeに戻る</Link>
      <h1>Redirected</h1>
      <p>ユーザ名：{state?.name ? state.name : null}</p>
    </>
  );
};
