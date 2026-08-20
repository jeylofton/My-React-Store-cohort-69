import { useState } from "react";

function Admin() {
const [couponCode, setCouponCode] = useState("");
const [CouponDiscount, setCouponDiscount] = useState(1);
const [coupons, setCoupons] = useState([]);

function saveCoupon(){
    console.log(couponCode);
    console.log(CouponDiscount);

    const newCoupon = {
        code: couponCode,
        discount: CouponDiscount,
    }

    setCoupons([...coupons, newCoupon])

    setCouponCode("");
    setCouponDiscount(1);
}

    return (
        <div>
            <h1>Store Administration</h1>

            <div className="d-flex gap-4">
                <section className="w-50">

                </section>
                <section className="w-50">
                    <h2>Add Coupons</h2>

                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column mb-3">
                                <label className="form-label text-start">Code</label>
                                <input className="form-control" type="text" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)} />
                            </div>   
                            <div className="d-flex flex-column mb-3">
                                <label className="form-label text-start">Discount</label>
                                <input className="form-control" type="number" value={CouponDiscount} onChange={(e)=>setCouponDiscount(e.target.value)} />
                            </div>
                            <div>
                                <button className="btn btn-primary m-1" onClick={saveCoupon}>Save Coupon</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Coupon List</h3>

                        {
                            coupons.length == 0
                            ? <p>There are no coupons</p>
                            :<ul className="list-group">
                                {coupons.map(coupon=> (
                                    <li className="list-group-item text-start">{coupon.code} - {coupon.discount}%</li>
                                ))}
                            </ul>
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Admin;