import React, { Component } from 'react';
import Display from './Display';
import axios from 'axios';

export default class Categorial extends Component {


    state = {
        product: [],
        categorial: []
    };
    componentDidMount(){
        // axios.get(`http://localhost:4000/getcategorielproducts`)
        //     .then( (response)=> {
        //         this.setState({
        //              categorial  : response.data
        //         })
        //         console.log(response.data);
        //         // console.log(this.state.categorial);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    }


render() {

    console.log(this.state.products)
    return (
        <div>
            <Display products={this.state.product} categorial={this.state.categorial} />
        </div>
    )
}
}
