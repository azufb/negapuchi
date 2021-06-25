import React from 'react';

class Form extends React.Component {
    constructor(props) {
        // 初期化
        super(props);
        this.state = {
            content: "",
            lists: []
        }
        this.handleReplace = this.handleReplace.bind(this);
        this.handleRetry = this.handleRetry.bind(this);
    }

    handleChange(event) {
        let inputContent = event.target.value;
        this.setState({
            content: inputContent
        });
    }

    handleReplace() {
        // 入力された値を、正規表現を使って変換。
        /* 
        「又は」を表すのは、「|」。
        ピリオドは、そのまま入れると、改行文字以外のどの 1 文字にもマッチする、「特殊文字」だと認識されてしまうため。エスケープする必要がある。
        */

        window.alert("プチッ！");

        let regExpCont = this.state.content;

        let meireiList = [
            'ろよ',
            'ろや',
            'せいや',
            'せんかい',
            'やれよ',
            'やれや',
            'やらんかい',
            'しいや',
            'てくれよ'
        ]

        let onegaiList = [
            'て頂ければ嬉しいです\u{1f97a}',
            'て頂ければ助かります\u{1f647}',
            'て欲しいです\u{1f64f}よろしくお願いします',
            'てもらえたらありがたい\u{1f609}',
            'てもらえたら嬉しいな\u{1f60a}',
            'てもらえたら嬉しいなー\u{1f61a}',
            'て欲しいな\u{1f3b6}'
        ]

        let ngList = [
            'しね',
            '死ね',
            'ころす',
            '殺す',
            'なぐる',
            'なぐん',
            '殴る',
            '殺意',
            '消えろ'
        ]

        for (let ngWord of ngList) {
            let regExp1 = new RegExp(`${ngWord}`, "gim");
            let regExpNg = regExpCont.match(regExp1);

            if (regExpNg !== null) {
                regExpCont = regExpCont.replace(regExpNg, "\u{1f4a3}\u{1f4a3}\u{1f4a3}");
            }
        }

        for (let meirei of meireiList) {
            let regExp2 = new RegExp(`${meirei}`, "gim");
            let regExpMeirei = regExpCont.match(regExp2);

            if (regExpMeirei !== null) {
                regExpCont = regExpCont.replace(regExpMeirei, `${onegaiList[Math.floor(Math.random()*onegaiList.length)]}`);
            }
        }

        let regExpKuten = new RegExp(/。|\.|$/, "gim");
        regExpCont = regExpCont.replace(regExpKuten, "！");
        let result = `いつもありがとう\u{1f606}${regExpCont}`;//\u{2757} 

        this.setState({
            lists: [...this.state.lists, result],// スプレッド構文
            content: ''
        });
    }

    handleRetry(id) {
        this.state.lists.splice(id);
        this.setState({
            lists: this.state.lists
        });
    }

    render() {
        let listsNode = this.state.lists.map((list, id) => {
            return (
                <p key={id}>
                    {list}
                </p> 
            )
        });
        return (
            <div className="area">
                <div className="form">
                    <div>
                        <textarea className="textarea" type="text" onChange={(event) => {this.handleChange(event)}} 
                        value={this.state.content} 
                        placeholder="ここに入力して下さい。"/>
                    </div>
                    <div className="btns">
                        <button className="btn" type="button" onClick={() => {this.handleReplace()}}>プチッ！</button>
                        <button className="btn btnRight" type="button" onClick={(id) => {this.handleRetry(id)}}>もう一度！</button>
                    </div>
                </div>

                <div className="resultTxt">
                    {listsNode}
                </div>
            </div>
        )
    }
}

export default Form;

/* extendsを用いて、Reactが用意しているAPIの、React.Componentを継承し、
親子関係を持つclassを作成。
継承した親classのプロパティを初期化するためには、constructorには、
親classを表す、super()の引数として、初期化したい値(大抵は、props)を渡す。
*/