import React, { Component } from 'react';

export default class Footer extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        console.log('Footer Component');
    }

    render() {
        const style = {
            background: 'pink',
            padding: '5px',
        };

        return (
            <footer style={style}>
                <p>{this.props.title}</p>
                <p>from the Footer</p>
            </footer>
        )
    }
}