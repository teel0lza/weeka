import React from 'react'

const Allproduct = ({ Product, Cart , setCart}) => {
    const addToCard = (pId) => {
        let check = Cart.find(i => i.id == pId)
        if (check == undefined) {
            let data = Product.find(i => i.id == pId)
            setCart([...Cart,{...data, amount: 1}]);
            console.log(Cart)
        } else {
            setCart(Cart.map(i => {
                if( i.id == pId) {
                    return { ...i, amount: i.amount +=1}
                } else {
                    return i
                }
            }))
        console.log(Cart)
        }
    }
    return (
        <div classname="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {Product.map(i => {
                    return (
                        <div className="col">
                        <div className="card shadow-sm">
                            <img className="bd-placeholder-img card-img-top" src={i.image}/>
                            <div className="card-body">
                            <p className="card-text">{i.price}</p>
                                <p className="card-text">{i.name}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button onClick={()=>addToCard(i.id)} type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                    </div>
                                    <small className="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
               
               
            </div>
        </div>

    )
}

export default Allproduct