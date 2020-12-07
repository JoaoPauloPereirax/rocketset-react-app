import React, { Component } from 'react'
import Api from './../../services/Api'


export default class Main extends Component {

    state = {
        products:[]
    }

    componentDidMount(){
        this.loadProducts();
    }//method executed as soon as the component enters in screen

    loadProducts = async()=>{
        const response = await Api.get('/products');
        console.log(response.data.docs);
        this.setState({products:response.data.docs})
    };

    render(){
        return (
            <div className="product-list">
                {this.state.products.map(prod =>{
                    return (<h2 key={prod._id}>{prod.title}</h2>);
                })}
            </div>
        )
    }
}