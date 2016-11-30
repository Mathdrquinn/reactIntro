// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Title from './Title';
// Actions
import { updateTitle } from '../../actions/appActions';
import { fetchHockeyData } from '../../actions/hockeyActions';

@connect((store) => {
    const title = store.app.name;
    return {
        title,
    }
})
export default class Header extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        console.log('Header Component');
        // this.props.dispatch(fetchHockeyData());
    }

    changeTitle(newTitle) {
        this.props.dispatch(updateTitle(newTitle))
    }

    render() {
        const style={
            background: 'cadetblue',
            padding: '5px',
        };

        return (
            <header style={style}>
                <p>This is the header with a <Title title={this.props.title} from Header/></p>
                <div><input type="text"
                            value={this.props.title}
                            onChange={(e) => this.changeTitle(e.target.value)}
                /></div>
                <img src="http://placebear.com/323/100" alt=""
                     onLoad={() => console.log('--loaded---')}
                     onError={() => console.log('--error---')}
                />
            </header>
        )
    }
}