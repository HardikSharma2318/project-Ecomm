import React from 'react';
import {ProductConsumer} from "../Context";
import {storeProducts,detailProduct} from "../Data";
import { genericTypeAnnotation } from '@babel/types';
import {Link} from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = props =>{
    let drawerClasses =  'side-drawer'; 
    /* side-drawer, where the animation is given, initially this is false and the drawer is hidden, because of sideDrawerOpen condition.*/
    if (props.shows) {
        drawerClasses = 'side-drawer open';
    /* here the side-drawer slides in because of the condition that sideDrawerOpen is true , and animation comes into picture.*/
    }

    return(
        <nav className={drawerClasses}>         
             <Link to="/" className="img-link">   
                <h2 className="heading" onClick={props.shows}> E-Kart <small className="smalletters">  The Shopping Mart </small>                 
                <img 
                    className="img-rounded" 
                    src="https://library.kissclipart.com/20180904/zlq/kissclipart-shopping-trolley-icon-clipart-shopping-cart-clip-a-4cf09b0c5818850a.png"
                    alt="store" 
                    width="60" 
                    height="60"
                    onClick={props.shows}
                /></h2></Link>     

            <ul className="list-group">
                <li className="list-group-item" >Home</li>  
                <li className="list-group-item"  o onClick = {() => {
                    value.getData("fashion")
                }}>Fashion</li>
                <li className="list-group-item"   onClick = {() => {
                    value.getData("testing")
                }}>Electronics</li>
                <li className="list-group-item">Stationary</li>
                <li className="list-group-item">Clothes</li>
            </ul>
        </nav>
    );
}
export default SideDrawer;
