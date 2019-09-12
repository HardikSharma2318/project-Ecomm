import React, { Component } from 'react'
import {storeProducts,detailProduct} from './Data';
import {storeProducts1,detailProduct1} from './Data';
import {storeProducts2,detailProduct2} from './Data';
import {storeProducts3,detailProduct3} from './Data';

const ProductContext = React.createContext(); //default values can be there we wish to create
// to create both provider ans consumer

//Place the ProductContext.Provider on top of the entire application.i.e in index.js
//Do the same thing as done in ProductList i.e getting data from the Data.js and put it in an array.
class ProductProvider extends Component {
    state={
        products: [],
       /* products_c1:[],
        products_c2:[],
        products_c3:[], */ //assigning the objects to the variables, means passing them as a reference, storeProducts is the array of objects
        detailProduct:detailProduct
    };
    componentDidMount(){
        this.setProducts();
       // this.setFashion();
    }
    setProducts = (searchInputVal) => { debugger
        //let tempProducts = [...storeProducts];
        this.getData("mobile");
        let smidvar = this.midvar;
        let filterData=[];
        
        //
      // console.log(this.state.products);
        if(searchInputVal) {
            filterData = smidvar.productdetail.filter((item)=>item.title ===  searchInputVal)
            this.setState({
                products: filterData
            })
        }else{
        this.setState( () => {
            return {products: smidvar.productdetail};
        });
        }
    };
    getData = (cagname) => {
        let trmppr = [...storeProducts];
        this.originaldata = trmppr;


       this.midvar = this.originaldata.find ((item)=>{
            if(item.category === cagname){
              return item.productdetail;
            }
        });
        this.setData(this.midvar.productdetail);
      
    };
    setData = (cagdata) => {
        
       this.setState({products:cagdata});

   };
    //setFashion = () => {
    //    let tempProducts = [];
    //    storeProducts1.forEach( item => {
    //    const singleItem = {...item};
    //    tempProducts = [...tempProducts, singleItem];
    //    });
    //    //
    //   
    //    this.setState( () => {
    //        return {products_c1: tempProducts};
    //    });
    //};


    getItem = id => {
        const product = this.state.products.find(item =>{return item.id === id});
        return product;
    };
    //getfashionItem = id => {
    //const fashionprod = this.state.products_c1.find(item =>{return item.id === id});
    //    return fashionprod;
    //}
    //handlefashionDetail = (id) =>{
    //    let fashionprod = this.getfashionItem(id);
    //    this.setState(() => {return {detailProduct: fashionprod}})
    //};
    handleDetail = (id) =>{ // To open up the details page
     let product = this.getItem(id);
     this.setState({detailProduct: product})  
     console.log(detailProduct);        
    };
    addToCart = (id) =>{ // To add the item to the cart
        console.log("ur product id is",{id});
        //let tempProducts = [...this.state.products];


    };
    /*tester = () => {
        console.log('State products :',this.state.products[0].inCart);
        console.log('Data products :',storeProducts[0].inCart);
}*/
    render() {
        return (
           // Provider is returned 
            <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart,setProducts:this.setProducts,getData:this.getData}}>
                {this.props.children}    {/* returning all the children (within this component) in our application */}
            </ProductContext.Provider>
        );
    }
}

//Consumer
 const ProductConsumer = ProductContext.Consumer;

 export {ProductProvider,ProductConsumer};
