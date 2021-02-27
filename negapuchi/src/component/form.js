import React from 'react';

class Form extends React.Component {
    constructor(props) {
        // 初期化
        super(props);
        this.state = {
            content: ``,
            lists: []
        }
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(event) {
        let inputContent = event.target.value;
        this.setState({
            content: inputContent
        })
    }

    handleAdd() {
        // 入力された値を、正規表現を使って変換。
        /* 
        「又は」を表すのは、「|」。
        ピリオドは、そのまま入れると、改行文字以外のどの 1 文字にもマッチする、「特殊文字」だと認識されてしまうため。エスケープする必要がある。
        */

        let regResult = this.state.content;


        let meireiList = [
            'ろよ',
            'ろや',
            'せいや',
            'せんかい',
            'やれよ',
            'やれや',
            'やらんかい'
        ]

        let onegai = [
            'て頂ければ嬉しいです！',
            'て頂ければ助かります！',
            'て欲しいです！',
            'てもらえたらありがたい！',
            'て欲しいです！'
        ]

        let ngList = [
            'しね',
            '死ね',
            'ころす',
            '殺す',
            'なぐる',
            'なぐん',
            '殴る',
        ]

        for (const element of ngList) {
            let regs1 = new RegExp(`${element}`, 'gim');
            let reg2 = regResult.match(regs1);

            if (reg2 !== null) {
                regResult = regResult.replace(reg2, '×××');
            }
        }

        for (let meirei of meireiList) {
            let regs2 = new RegExp(`${meirei}`, 'gim');
            let reg3 = regResult.match(regs2);

            if (reg3 !== null) {
                regResult = regResult.replace(reg3, onegai[Math.floor(Math.random()*onegai.length)]);
            }
        }

        let kuten = new RegExp(/。|\./, 'gim');
        let result = regResult.replace(kuten, '!');

        this.setState({
            lists: [...this.state.lists, result],
            content: ''
        });
        
    }

    render() {
        return (
            <div>
                <textarea type='text' onChange={(event) => {this.handleChange(event)}} 
                value={ this.state.content } />
                <input type='button' value='変換' onClick={() => {this.handleAdd()}} />

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