import { Component } from 'react';

export default class Resume extends Component {
    render() {
        const { name } = this.props;
        return <h1>Class component 2; name: {name}</h1>;
    }
}