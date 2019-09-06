import React, { Component } from 'react'
import {storeProducts,detailProduct} from './Data';


const ProductContext = React.createContext(); 

//Place the ProductContext.Provider on top of the entire application.i.e in index.js
//Do the same thing as done in ProductList i.e getting data from the Data.js and put it in an array.
class ProductProvider extends Component {
    state={
        products: [],  //assigning the objects to the variables, means passing them as a reference, storeProducts is the array of objects
        detailProduct:detailProduct
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach( item => {
        const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem];
        });
        this.setState( () => {
            return {products: tempProducts};
        });
    };
    getItem = id => {
        const product = this.state.products.find(item =>{return item.id === id});
        return product;
    };
    handleDetail = (id) =>{ // To open up the details page
     let product = this.getItem(id);
     this.setState( () => {return {detailProduct: product}
    
    })          
    };
    addToCart = (id) =>{ // To add the item to the cart
        //let tempProducts = [...this.state.products];


    };
    /*tester = () => {
        console.log('State products :',this.state.products[0].inCart);
        console.log('Data products :',storeProducts[0].inCart);
}*/
    render() {
        return (
           // Provider is returned 
            <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart}}>
                {this.props.children}    {/* returning all the children (within this component) in our application */}
            </ProductContext.Provider>
        );
    }
}

//Consumer
 const ProductConsumer = ProductContext.Consumer;

 export {ProductProvider,ProductConsumer};
