import React, { Component } from 'react';

export default class Title extends Component {
    constructor() {
        super()
    }

    render() {
        const style = {
            color: 'blue',
        };

        return (
            <span style={style}>{this.props.title}</span>
        );
    }
}