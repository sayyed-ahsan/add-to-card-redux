import React, { useState } from 'react';

const CartModal = ({ productInfo, setProductInfo, user }) => {

    const [quantity,setQuantity] = useState(0);

    const [loading, setLoading] = useState(false);
    const handleBooking = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" onClick={()=> setQuantity(0)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productInfo.name}</h3>
                    <form onSubmit={handleBooking}>
                        <div className="form-control mt-2 grid grid-cols-1 gap-3">
                            <input type="text" name='buyerName' placeholder="Type here" value={user?.displayName} className="input input-bordered input-sm w-full" disabled />

                            <input type="text" name='buyerEmail' placeholder="Type here" value={user?.email} className="input input-bordered input-sm w-full" disabled />

                            <input type="text" placeholder="Type here" value={`Price: $ ${productInfo.price}`} className="input input-bordered input-sm w-full " disabled />
                            <label className="input-group">
                                <span className='cursor-pointer' onClick={()=> setQuantity(quantity-1)}>-</span>
                                <input type="text" value={quantity} className="input focus:outline-none input-sm input-bordered" />
                                <span className='cursor-pointer' onClick={()=> setQuantity(quantity+1)}>+</span>
                            </label>
                            <div>
                                <button className={`w-full btn bg-indigo-500 border-none btn-sm text-white ${loading ? 'loading' : ''}`}>ADD TO CART</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default CartModal;