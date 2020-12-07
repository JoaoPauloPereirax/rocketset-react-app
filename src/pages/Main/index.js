import React, { Component } from 'react'
import Api from '../../services/Api'
import './styled.css'


export default class Main extends Component {

    state = {
        products:[],
        productInfo:{},
        page:1
    }

    componentDidMount(){
        this.loadProducts();
    }//method executed as soon as the component enters in screen

    loadProducts = async(page=1)=>{
        const response = await Api.get(`/products?page=${page}`);
       
        const {docs, ...productInfo} = response.data;

        this.setState({products:docs,productInfo,page})
    };

    prevPage =()=>{
        const {page}=this.state;

        if(page===1) return;
        const pageNumber = page-1;
        this.loadProducts(pageNumber);
    };
    nextPage = ()=>{
        const { page, productInfo} = this.state;

        if(page === productInfo.pages) return;
        const pageNumber = page+1
        this.loadProducts(pageNumber)

    };

    render(){

        //disruption process
        const {products, page, productInfo} = this.state;

        return (
            <div className="product-list">
                {products.map(prod=>(
                    <article key={prod._id}>
                        <strong>{prod.title}</strong>
                        <p>{prod.description}</p>
                        <a href="https://breaking-bad-react-app.joaopaulopereirax.vercel.app/">ACESSAR</a>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page===productInfo.pages} onClick={this.nextPage}>Próximo</button>                    
                </div>
            </div>
        )
    }
}