import React, { Component } from 'react';

import Title from './Title';

export default class Header extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        console.log('Header Component');
    }

    render() {
        const style={
            background: 'cadetblue',
            padding: '5px',
        };

        console.count(this.props)

        return (
            <header style={style}>This is the header with a <Title title={this.props.title} from Header/></header>
        )
    }
}