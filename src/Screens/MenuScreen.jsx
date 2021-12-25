import React, { useState } from 'react'
import data from "../menu.json"

export default function MenuScreen() {
    console.log(data);

    const handleCart = (food) => {
        localStorage.setItem("cartData", JSON.stringify(food))
    }

    let sortedCategory = [];
    if (data) {
        const allCategory = [];
        data.map((item) => (allCategory.push(item.category)))
        sortedCategory = [...new Set(allCategory)];
    }

    return (
        <div className="banner container">
            {
                sortedCategory.map((category, index) => (
                    <div key={index}>
                        <h1 className="banner_title">{category}</h1>   
                        <div className="row">
                            {
                                data.filter(x => x.category === category).map((items) => (
                                    <div className="col-md-4 py-3" key={items.id}>
                                        <div className="card mx-auto" style={{width: "14rem"}}>
                                            <img className="card-img-top" style={{width: "14rem", height: "14rem"}} src={items.image} alt="..." />
                                            <div className="card-body">
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                                    {
                                                        (items.name).length > 15 ? (
                                                            <h4 className="card-title m-0">{(items.name).slice(0,15) + "..."}</h4>
                                                        ) : (
                                                            <h4 className="card-title m-0">{items.name}</h4>
                                                        )
                                                    }
                                                    <p className="price m-0">₹{items.price}</p>
                                                </div>
                                                <div className="add_cart_btn">
                                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                                        <button className="btn btn-warning w-100" onClick={() => (handleCart(items))}>Add to cart</button>
                                                        {/* <select onChange={(e) => setQty(e.target.value)}>
                                                            {[...Array(10).keys()].map(
                                                                (x) => (                      
                                                                    <option key={x} value={x}>
                                                                    {x}
                                                                </option>
                                                                )
                                                            )}
                                                        </select> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            <br/>     
            
        </div>
    )
}
