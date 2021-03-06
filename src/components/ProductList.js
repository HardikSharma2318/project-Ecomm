/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
// List of all the products
import React, { Component } from 'react'
import Title from './Title';
import Product from './Product';
import Searchbar from './Searchbar';
import {storeProducts} from './Data'; 
import {ProductConsumer} from './Context';
export default class ProductList extends Component {
    constructor(props){
        super(props);
    }
    /* example import used before Context.js */
    
    /*state={
          products: storeProducts
      };*/
 /*     state = {
        tmeparr: [],
        ans: null
     };

     
    componentrDidMount(){
        this.setdata();
    }
    setdata = () => {
        let trmppr = [];
        storeProducts.forEach( item => {
        const singleitem = {...item};
        trmppr = [...trmppr, singleitem];
        });
        this.setState( () => {
            return {tmeparr:trmppr};
        });
    };

    handlechange = (e) => {
        const textvalue = e.target.value;
        this.state.tmeparr.map(temp => {
        this.setState({ans:temp.title === textvalue?<Product product = {temp}/> : <Product   product ={this.state.tmeparr}/>});
        });
    };
*/
    render() {
        //console.log(this.state.products); --> displaying all the data in console
        return (
            <React.Fragment>
                <div className="py-5"> {/* padding from bottom */} 
                 <div className="container"> {/* bootstrap class */}
                    <Title name="e" title="-kart"/>
                    <div className="row"> {/* Row for the Products and we create a new file for the title of the products */}
                    <ProductConsumer>
                        {/* Always remember no 'props' required for ContextAPI */}

                        {(value)=>{  debugger                          
                            {/* he83re 'products' is the product from the provider */}
                            //value.products = this.props.ans;
                            
                            return value.products.map(product=>{
                                
                                return <Product key={product.id} product={product}/>    

                            {/* That means for each & every items in the productList i.e storeProducts array from Context.js we return the data 
                                from product */}
                            }) 
                            
                        }
                        
                        }
                        {/* We must always use a function to get data from Context here (hello is the parameter taht we recieve from Context and
                           {hello} is the 'value' attribute in the Context)*/}

                          
                    </ProductConsumer>
                    </div>
                 </div>
                </div>        
            </React.Fragment>            
        );
    }
}
//<Product />
/* in <ProductConsumer> the outer  return is for the entire list of items and the inner return is for the single items, when the array loops
 all the product detials is given to the App.js.*/
