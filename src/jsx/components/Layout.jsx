import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends Component {
    constructor() {
        super()
        this.state = { title: 'Welcome' };
    }
    
    componentWillMount() {
        
    }
    
    render() {
        setTimeout(() => {
            this.setState({ title: 'Welcome from React' });
        }, 2000);
        
        // const hTitle = 'Header Title';
        // const fTitle = 'Footer Title';
        return(
            <div>
                <Header title={this.state.title}/>
                <h1>Layout (Component)</h1>
                <p>{this.state.name}</p>
                <p>{4+5}</p>
                <Footer title={this.state.title}/>
            </div>
        )
    }
}