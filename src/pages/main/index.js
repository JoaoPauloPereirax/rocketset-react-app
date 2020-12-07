import React, { Component } from 'react'
import Api from './../../services/Api'


export default class Main extends Component {

    componentDidMount(){
        this.loadProducts();
    }//method executed as soon as the component enters in screen

    loadProducts = async()=>{
        const response = await Api.get('/products');
        console.log(response.data.docs);
    };

    render(){
        return <h1>Hello World!</h1>
    }
}