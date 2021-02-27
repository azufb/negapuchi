import React from 'react';

class Form extends React.Component {
    constructor(props) {
        // 初期化
        super(props);
        this.state = {
            content: '',
            lists: []
        }
        this.handleReplace = this.handleReplace.bind(this);
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
            'て頂ければ嬉しいです！',
            'て頂ければ助かります！',
            'て欲しいです！',
            'てもらえたらありがたい！',
            'てもらえたら嬉しいな！',
            'てもらえたら嬉しいなー！',
            'て欲しいな！'
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
            let regExp1 = new RegExp(`${ngWord}`, 'gim');
            let regExpNg = regExpCont.match(regExp1);

            if (regExpNg !== null) {
                regExpCont = regExpCont.replace(regExpNg, '×××');
            }
        }

        for (let meirei of meireiList) {
            let regExp2 = new RegExp(`${meirei}`, 'gim');
            let regExpMeirei = regExpCont.match(regExp2);

            if (regExpMeirei !== null) {
                regExpCont = regExpCont.replace(regExpMeirei, `${onegaiList[Math.floor(Math.random()*onegaiList.length)]}\nすみませんがお願い致します。`);
            }
        }

        let regExpKuten = new RegExp(/。|\./, 'gim');
        regExpCont = regExpCont.replace(regExpKuten, '!');
        let result = `いつもありがとう(^ ^)v\n${regExpCont}`;

        this.setState({
            lists: [...this.state.lists, result],// スプレッド構文
            content: ''
        });
        
    }

    render() {
        return (
            <div>
                <textarea type='text' onChange={(event) => {this.handleChange(event)}} 
                value={this.state.content} />
                <input type='button' value='変換' onClick={() => {this.handleReplace()}} />

                <div>
                {this.state.lists.map((list, i) => <p key={i}>{list}</p>)}
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