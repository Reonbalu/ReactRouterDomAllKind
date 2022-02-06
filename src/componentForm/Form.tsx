import React from "react";
import "./styles/form.css";
// react-router-domライブラリから、useSearchParamsフックをimportする
// また、クエリパラメーターの生成に使うcreateSearchParamsメソッドもimportする
import { useNavigate, createSearchParams } from "react-router-dom";

export const Form: React.VFC = () => {
  // useNavigateフックをつかって、usenavigateを生成する
  const navigate = useNavigate();
  //form でsubmitが実行された時に起動させる関数
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // submitページ更新などの機能を中断させる
    e.preventDefault();

    // formのinputタグ・selectタグから、入力値・選択値を取得する
    const name: string = e.currentTarget.userName.value;
    const gender: string = e.currentTarget.userGender.value;
    const score: string = e.currentTarget.userScore.value;

    // createSearchParamsによってクエリパラメータのオブジェクトを生成
    // toString()によって文字列化した後に、paramsに格納
    const params = createSearchParams({
      name: name,
      gender: gender,
      score: score
    }).toString();
    console.log(params);
    //navigateオブジェクトにpathを設定して、リダイレクト処理
    navigate(`/formresult/?${params}`, { replace: false });
  };

  return (
    <>
      <h1>ユーザ検索フォーム</h1>
      <form onSubmit={handleSubmit}>
        <label className="form__label">
          名前 　<input type="text" name="userName" />
        </label>
        <label className="form__label">
          性別
          <select name="userGender" defaultValue="">
            <option value="">未選択</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
        </label>
        <label className="form__label">
          成績
          <select name="userScore" defaultValue="">
            <option value="">未選択</option>
            <option value="100">100</option>
            <option value="90">90</option>
            <option value="80">80</option>
            <option value="70">70</option>
            <option value="60">60</option>
            <option value="50">50</option>
            <option value="40">40</option>
            <option value="30">30</option>
            <option value="failure">30点未満</option>
          </select>
        </label>
        <button>検索する</button>
      </form>
    </>
  );
};
