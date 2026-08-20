

function Admin() {
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
                                <input className="form-control" type="text" />
                            </div>   
                            <div className="d-flex flex-column mb-3">
                                <label className="form-label text-start">Discount</label>
                                <input className="form-control" type="number" />
                            </div>
                            <div>
                                <button className="btn-primary m-1">Save Coupon</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Admin;