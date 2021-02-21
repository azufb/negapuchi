import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <p>Formはここです。</p>
                <form>
                    <input type='text' />
                    <input type='submit' value='変換' />
                </form>
            </div>
        )
    }
}

export default Form;