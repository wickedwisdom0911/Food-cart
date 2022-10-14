import React, { useEffect, useState }  from "react";
import { useContext } from "react/cjs/react.development";
import CartIcon from "../Cart/CartIcon";
import Header from "./Header";
import classes from "./HeaderCartButton.module.css" 
import CartContext from "../Cart/cart-context";


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const[highlight, setHighlight]=useState(false);
  const{items}=useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0)


const btnClasses=`${classes.button} ${highlight ? classes.bump : ''}`

useEffect(()=>{

    if(items.length===0)
    {
        return;
    }


    setHighlight(true);

    
    const timer=setTimeout(()=>{

          
        setHighlight(false)
         

    }, 300)


    return(()=>{
        clearTimeout(timer);
    })


},[items])  


    return (
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    );
  };
  
  export default HeaderCartButton;