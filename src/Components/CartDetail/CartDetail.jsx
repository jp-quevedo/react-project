import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartDetail.css';

const CartDetail = () => {
    const { cart, removeItem, clearCart, getTotalPriceInCart, getTotalShipping, orderTotal } = useContext(cartContext)

    return (
        <div className="cart-container">
            <div>
                <h2>Bolsa de compras</h2>
                <table>
                    <thead>
                        <tr>
                            <th className="tabla">Nombre</th>
                            <th className="tabla">Precio Unitario</th>
                            <th className="tabla">Cantidad Agregada</th>
                            <th className="tabla">Precio Total</th>
                            <th className="tabla">Eliminar</th>
                        </tr>
                    </thead>
                </table>
                <hr/>
            </div>
            <div>
                {cart.map((item) => (
                    <div key={item}>
                        {console.log(item.id)}
                        <table>
                            <tbody>
                                <tr>
                                    <th className="tabla"><p className="detailcart-text">{item.name}</p></th>
                                    <th className="tabla"><p className="detailcart-text">${item.price}</p></th>
                                    <th className="tabla"><p className="detailcart-text">{item.quantity}</p></th>
                                    <th className="tabla"><p className="detailcart-text">${item.price * item.quantity}</p></th>
                                    <th className="tabla"><button onClick={() => removeItem(item.id)} className="eliminar">
                                        <img className="tabla-icon" src="/assets/basura.svg" alt="eliminar"></img></button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                ))}
                    <table className="tabla">
                        <tfoot>
                            <tr>
                                <th>
                                    <p className="totalcart-text">Subtotal:</p>
                                </th>
                                <th>
                                    <p className="totalcart-text">${getTotalPriceInCart()}</p>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <p className="totalcart-text">Costo de Envío:</p>
                                </th>
                                <th>
                                    <p className="totalcart-text">${getTotalShipping().toFixed(0)}</p>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <p className="totalcart-text">Total de la Compra:</p>
                                </th>
                                <th>
                                    <p className="totalcart-text">${orderTotal().toFixed(0)}</p>
                                </th>
                            </tr>
                        </tfoot>
                    </table>              
                </div>
            <div>
                <Link to='/checkout' className="checkout-btn">Confirmar Compra</Link>
                <Link to='/' className="checkout-btn">Seguir Comprando</Link>
                <div className="eliminar-bolsa"><button onClick={() => clearCart()} className="eliminar-bolsa-btn">Vaciar Bolsa</button></div>
            </div>
        </div>
    )
}

export default CartDetail;