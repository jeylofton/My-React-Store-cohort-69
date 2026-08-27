import { useState } from "react";

function Admin() {
const [couponCode, setCouponCode] = useState("");
const [CouponDiscount, setCouponDiscount] = useState(1);
const [coupons, setCoupons] = useState([]);

const [productTitle, setProductTitle] = useState("");
const [productCategory, setProductCategory] = useState("");
const [productImage, setProductImage] = useState("");
const [productPrice, setProductPrice] = useState(0);
const [products, setProducts] = useState([]);

function saveProduct(){
    console.log(productTitle);
    console.log(productCategory);
    console.log(productImage);
    console.log(productPrice);

    const newProduct = {
        title: productTitle,
        category: productCategory,
        image: productImage,
        price: productPrice,
    }

    setProducts([...products, newProduct])

    setProductTitle("");
    setProductCategory("");
    setProductImage("");
    setProductPrice(0);
}

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
                    <h2>Add Products</h2>

                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column mb-3">
                                <label className="form-label text-start">Title</label>
                                <input className="form-control" type="text" value={productTitle} onChange={(e)=>setProductTitle(e.target.value)} />
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <label className="form-label text-start">Category</label>
                                <input className="form-control" type="text" value={productCategory} onChange={(e)=>setProductCategory(e.target.value)} />
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <label className="form-label text-start">Image (URL)</label>
                                <input className="form-control" type="text" placeholder="https://www.image.com/category/1" value={productImage} onChange={(e)=>setProductImage(e.target.value)} />
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <label className="form-label text-start">Price</label>
                                <input className="form-control" type="number" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} />
                            </div>
                            <div>
                                <button className="btn btn-primary m-1" onClick={saveProduct}>Save Product</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Products List</h3>

                        {
                            products.length == 0
                            ? <p>There are no products</p>
                            :<div className="d-flex flex-wrap gap-3">
                                {products.map((product, index)=> (
                                    <div className="card" style={{width: "calc(50% - 0.5rem)"}} key={index}>
                                        <img src={product.image} className="card-img-top" alt={product.title} />
                                        <div className="card-body text-start">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.category}</p>
                                            <p className="card-text">${product.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
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