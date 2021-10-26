import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal
  } = useCart();

  /* set render when cart empty */
  if(isEmpty) return <section className="py-4">
    <div className="justify-content-center">
      <div className="col-12">
        <h4>Your cart is empty</h4>
      </div>
    </div>
  </section>

  return (
    <section className="">
      <div className="justify-content-center">
        <div className="col-12">
          <h4 className="text-center" id="cartinfo">Cart ({totalUniqueItems}), total Items ({totalItems})</h4>
          <div id="table">
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                    <td>
                      <img src={item.image} alt="" style={{height: '3rem'}}/>
                    </td>
                    <td>{item.title}</td>
                    <td>$ {item.price}</td>
                    <td>Quantity: ({item.quantity})</td>
                    <td>
                      <button 
                      className="btn btn-info ms-2"
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <button className="btn btn-info ms-2"
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className="btn btn-danger ms-2"
                      onClick={() => removeItem(item.id)}>Remove Item</button>
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center">
          <div className="col-auto ms-auto">
            <h4>Total price: $ {cartTotal}</h4>
          </div>
          <div id="clear_check" className="col-auto">
            <button className="btn btn-danger m-2"
            onClick={() => emptyCart()}
            >Clear cart</button>
            <button className="btn btn-warning m-2">Check out</button>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Cart