import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer';
import Header from './Header';

import { fetchMuseumData } from '../../actions/museumActions';

@connect((store) => {
    const images = store.museum.data.map((child) => {
        const image = {
            id: child.data.id,
            src: child.data.thumbnail,
            title: child.data.title,
            url: child.data.url,
        }

        return image;
    });
    return {
        images,
        loading: store.museum.loading,
    }
})
export default class Layout extends Component {
    constructor() {
        super()
    }
    
    componentWillMount() {
        console.log('Layout Component');
        this.props.dispatch(fetchMuseumData())
    }
    
    render() {
        return(
            <div>
                <Header/>
                <h1>Layout</h1>
                <p>
                    {this.props.loading ?
                        'loading...'
                        :
                        this.props.images.map((image) => {
                            return (
                                <a href={image.url} key={image.id}>
                                    <img src={image.src} alt={image.title} />
                                </a>
                            );
                        })
                    }
                </p>
                <Footer/>
            </div>
        )
    }
}