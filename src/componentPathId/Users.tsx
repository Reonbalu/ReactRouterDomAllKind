import { useParams } from "react-router-dom";
import { users } from "./user";

export const Users: React.VFC = () => {
  // useParamsフックを使い、URLパラメータの参照をparamsに格納
  const params = useParams();
  // paramsの中にあるidプロパティを参照
  const userId: number = Number(params.id);
  //users配列でインデックスを指定して、ユーザー情報を取得
  const user = users[userId - 1];
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li>ID:{user.id}</li>
        <li>名前:{user.name}</li>
        <li>性別:{user.gender}</li>
        <li>年齢:{user.age}歳</li>
      </ul>
    </>
  );
};
