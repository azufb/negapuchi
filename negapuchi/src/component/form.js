import React from 'react';

class Form extends React.Component {
    constructor(props) {
        // 初期化
        super(props);
        this.state = {
            content: '',
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
        let reg = new RegExp(/。|\./, 'gim');
        let regResult = this.state.content.replace(reg, '！');

        let reg2 = this.state.content.match(/ろよ/)

        if (reg2!== null) {
            regResult = this.state.content.replace(reg2, 'て頂ければ嬉しいです！')
        }

        this.setState({
            lists: [...this.state.lists, regResult],
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