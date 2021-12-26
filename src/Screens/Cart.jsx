import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Cart() {

    const [cartData, setCartData] = useState();

    const getcart = () => {
        let list = JSON.parse(localStorage.getItem("cartData"))
        if (list) {
            setCartData(list)
        } else {
            setCartData([])
        }
    }

    const deleteItem = (id) => {
        const updatedItem = cartData.filter((cartData) => {
            return cartData._id !== id
        })
        setCartData(updatedItem)
        localStorage.setItem("cartData", JSON.stringify(updatedItem))
    }

    const addQty = (id) => {
        let updatedQty = cartData.find((x) => {
            return x._id === id
        }) 

        const qty = updatedQty.quantity + 1
         
        updatedQty.quantity = qty
        
        const updatedItem = cartData.filter((cartData) => {
            return cartData._id !== id
        })

        updatedItem.push(updatedQty);
        setCartData(updatedItem)
        localStorage.setItem("cartData", JSON.stringify(updatedItem))
    }

    const reduceQty = (id) => {
        let updatedQty = cartData.find((x) => {
            return x._id === id
        }) 
        if (updatedQty.quantity >= 2) {
            const qty = updatedQty.quantity - 1
            updatedQty.quantity = qty
            const updatedItem = cartData.filter((cartData) => {
                return cartData._id !== id
            })
    
            updatedItem.push(updatedQty);
            setCartData(updatedItem)
            localStorage.setItem("cartData", JSON.stringify(updatedItem))
        }
         
    }

    const emptyCart = () => {
        localStorage.setItem("cartData", JSON.stringify([]))
        getcart()
    }
    
    useEffect(() => {
        getcart()
    }, [])
    
    return (
        <div className="banner container">
            <h1 className="banner_titleh">Cart</h1>
            <br/>
            <div style={{backgroundColor: "white"}}>            
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col" style={{textAlign: "center"}}>Quantity</th>
                            <th scope="col">Remove Product</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            (cartData) ? (
                                cartData.sort(( a, b ) => (b._id - a._id)).map((x) => (
                                    <tr key={x._id}>
                                        <th scope="row">{x._id}</th>
                                        <td>{x.name}</td>
                                        <td>{x.category}</td>
                                        <td>{x.price}</td>
                                        <td style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                                            <button className="qtyBtn" onClick={() => reduceQty(x._id)}>-</button>
                                            {x.quantity}
                                            <button className="qtyBtn" onClick={() => addQty(x._id)}>+</button>
                                        </td>
                                        <td>
                                            <Link type="button" to="#" style={{color: "red"}} onClick={() => deleteItem(x._id)}><i className="far fa-trash-alt"></i></Link>
                                        </td>
                                    </tr>

                                ))
                            ) : (
                                <tr><td>Cart is empty</td></tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <br/>
            
            <button className="btn btn-danger" onClick={emptyCart}>Remove All</button>
            <Link to="/success" className="btn btn-success">Pay Now</Link>

        </div>

    )
}
