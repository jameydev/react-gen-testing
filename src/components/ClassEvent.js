import { Component } from 'react';

export default class ClassEvent extends Component {
    handleClick() {
        console.log('Class based event handling');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Clicky</button>
            </div>
        );
    }
}