import React, { useState, useEffect } from "react";
// ユーザ情報をimport
import { users } from "./users";
// ユーザオブジェクトの型をimport
import { User } from "./types/User";
import { Link, useSearchParams } from "react-router-dom";

export const SearchResult: React.VFC = () => {
  // クエリパラメータによって絞り込んだユーザ情報のstateを管理
  const [filteredUser, setFilteredUser] = useState<User[]>([]);

  // useEffectフックが起動したかどうかのstateを管理
  const [flag, setFlag] = useState<boolean>(false);

  //useSearchParamsフックを使って、searchParamsオブジェクトを生成
  // 今回はsetterメソッドは不要なので、配列の第2要素を省略
  const [searchParams] = useSearchParams();

  // searchParamsオブジェクトのgetメソッドにkeyを渡して、対応する値を取得
  const name = searchParams.get("name");
  const gender = searchParams.get("gender");
  const score = searchParams.get("score");

  // クエリパラメータとfilterメソッドを組み合わせて、条件に会うユーザ情報だけを抽出する
  useEffect(
    () => {
      let copyUser = [...users];
      if (name) {
        copyUser = copyUser.filter((user) => user.name.match(name));
      }
      if (gender) {
        if (gender === "male") {
          copyUser = copyUser.filter((user) => user.gender === "男性");
        } else if (gender === "female") {
          copyUser = copyUser.filter((user) => user.gender === "女性");
        }
      }
      if (score) {
        if (score === "faiure") {
          copyUser = copyUser.filter((user) => user.score < 30);
        } else {
          const numScore = Number(score);
          copyUser = copyUser.filter((user) => user.score >= numScore);
        }
      }
      setFlag(true);
      setFilteredUser(copyUser);
    },
    // ↓　依存配列の空にしたことによるeslintの警告を抑制するための一文　↓
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">TOP</Link>
          </li>
        </ul>
      </nav>
      <h1>検索でヒットしたユーザー</h1>
      {flag &&
        filteredUser.length > 0 &&
        filteredUser.map((user) => {
          return (
            <ul key={user.id}>
              <li>ID：{user.id}</li>
              <li>名前：{user.name}</li>
              <li>性別：{user.gender}</li>
              <li>成績：{user.score}点</li>
            </ul>
          );
        })}
      {flag && filteredUser.length === 0 && (
        <p>該当ユーザーが見つかりませんでした</p>
      )}
      {!flag && <p>該当ユーザーを検索中です……</p>}
    </>
  );
};
