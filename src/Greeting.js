import React from "react";

export default class Greeting extends React.PureComponent {
    render() {
        return (
            <h2>Hello {this.props.username}!</h2>
        )
    }
}