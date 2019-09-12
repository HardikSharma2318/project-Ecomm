import React,{Component} from "react";
import {ProductConsumer} from "./Context";
import {storeProducts,detailProduct} from "./Data";

import ProductList from "./ProductList";
export default class Searchbar extends Component{
    state = {
       tmeparr: [],
       ans: [],
       stext: " " 
    };
    
    componentrDidMount(){
        this.setdata();
    }
    setdata = () => {
        let trmppr = [...storeProducts];
        this.originaldata = trmppr;

    
        this.setState( () => {
            
            return {tmeparr:trmppr};
        });
    };
        handlechange = (e)=>{
            let stext ="";
            this.setState({stext:e.target.value});
           // console.log(this.state.tmeparr[1]);
        }
    render(){
        //const {id,title,img,price,inCart} = this.tmeparr;
        
        return( 
            
            <ProductConsumer>
                { (value) =>(
            <div>
                
                <input type="text" placeholder="Search.." name="search" onChange ={this.handlechange} />
                <button type="submit" onClick = {(e) => {
                 console.log(value)
                  let  textvalue = this.state.stext;
                  
                    value.setProducts(textvalue)
                    
               // this.state.ans!=null?value.products=this.state.ans : value.products = this.state.tmeparr
            }}> 
                Search
                </button>
                
               
            </div>
            )
            
             } 
                   
        </ProductConsumer>
            
        );
    }
}

