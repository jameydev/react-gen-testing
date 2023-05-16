import { Component } from "react";

export default class Form extends Component {
    state = {
        firstName: ""
    };

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            firstName: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form action="#">
                    <input onChange={this.handleChange} type="text" value={this.state.firstName} />
                </form>
            </div>
        );
    }
}