import { Component } from 'react';

export default class Message extends Component {
    render() {
        return <h1>Message {this.props.msgCode}: {this.props.msgContent}</h1>;
    }
}