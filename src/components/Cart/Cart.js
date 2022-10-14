import React, { useContext } from "react";
import Modal from '../UI/Modal';
import CartContext from "./cart-context";
import classes from './Cart.module.css';
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctx=useContext(CartContext);

const totalAmount=`$${ctx.totalAmount.toFixed(2)}`
const hasItems=ctx.items.length>0;


const cartItemRemoveHandler=id=>{


ctx.removeItem(id)

};
const cartItemAddHandler=item=>{

  ctx.addItem({...item, amount:1})
}


  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (

           


        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null,  item)} />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseCart} className={classes['button--alt']}>Close</button>
       {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;