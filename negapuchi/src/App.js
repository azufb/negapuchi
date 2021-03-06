import React from 'react';
import Form from './component/form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ネガプチッ<span className="title">！</span></h1>
        <Form />
      </div>
    )
  }
}

export default App;

/* 処理の流れ
①入力フォームに、文章を打つ。
②変換ボタンを押す。
③入力フォームに入力された文章の中から、読点(。)などを見つけ出し、
絵文字やエクスクラメーションマーク(!)に変換する。
③表示エリアに、変換された文章を表示する。
*/

/* 必要なパーツ
・タイトル
・入力フォームと変換ボタン→コンポーネント化
・表示エリア→コンポーネント化
*/