import React, { Component } from 'react'
import Api from '../../services/Api'
import './styled.css'


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

        //disruption process
        const {products} = this.state;

        return (
            <div className="product-list">
                {products.map(prod=>(
                    <article key={prod._id}>
                        <strong>{prod.title}</strong>
                        <p>{prod.description}</p>
                        <a href="">ACESSAR</a>
                    </article>
                ))}

                <div className="actions">
                    <button>Anterior</button>
                    <button>Próximo</button>                    
                </div>
            </div>
        )
    }
}