import React from 'react';
import Form from './component/form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ネガプチッ！</h1>
        <div className="contents">
          <div className="introTxt">
            <p>
              メールなどでのやりとりで、冷たい表現、嫌なメッセージを受け取ったとき...。<br />
              もしかしたら、送った本人には悪気はないのかもしれない...&#x1f914;<br />
              でも、心は傷ついている...&#x1f62d;<br />
              <br />
              そんなときは、ここで、メッセージの一部を変換して、メッセージを受け止めやすくしてみませんか？
            </p>
            <p>
              まずは、変換したい文章を入力し、「<span className="koukaonTxt introKoukaon">プチッ！</span>」としてみて下さい！
            </p>
          </div>
          <Form />
        </div>
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