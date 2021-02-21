import React from 'react';

class Form extends React.Component {
    constructor(props) {
        // 初期化
        super(props);
        this.state = {
            content: ''
        }
    }

    handleChange(event) {
        let inputContent = event.target.value;
        this.setState({
            content: inputContent
        })
    }
    render() {
        return (
            <div>
                <p>Formはここです。</p>
                <form>
                    <input type='text' onChange={(event) => {this.handleChange(event)}} 
                    value={ this.state.content } />
                    <input type='submit' value='変換' />
                </form>
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